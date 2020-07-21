import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, interval, Observable, of, Subscription } from 'rxjs';
import { catchError, map, mergeMap, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { Answer, Question, SoloGame } from 'src/app/shared/interfaces/solo-game';
import { reverseTimer } from 'src/app/shared/operators/reverse-timer';

@Component({
  selector: 'hestia-solo-game',
  templateUrl: './solo-game.component.html'
})
export class SoloGameComponent implements OnInit, OnDestroy {

  constructor(
    public readonly auth: AngularFireAuth,
    public readonly db: AngularFireDatabase,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  private finisGameSub: Subscription;


  public readonly soloGame: Observable<SoloGame> = this.route.params.pipe(
    map(p => p.id),
    switchMap(gameId => this.db.object<SoloGame>(`single-player/${gameId}`).valueChanges()),
    shareReplay(1),
    tap(g => console.log('Game:', g)),
  );

  public readonly currentQuestion: Observable<Question | null> = this.soloGame.pipe(
    map(g => g.questions[g.currentQuestion]),
    catchError(() => of(null)),
    shareReplay(1),
  );

  public readonly gameStarted: Observable<boolean> = this.soloGame.pipe(
    map(g => g?.status === 'ON_GOING'),
  );
  public readonly gameFinished: Observable<boolean> = this.soloGame.pipe(
    map(g => g?.status === 'ENDED'),
  );

  public readonly timer: Observable<number> = this.currentQuestion.pipe(
    switchMap(q => interval(1000).pipe(reverseTimer(q.time))),
    map(t => Math.max(t, 0)),
    tap(t => {
      if (t === 0) this.selectAnswer(null);
    }),
    catchError(() => of(null)),
    shareReplay(1),
  );

  async ngOnInit(): Promise<void> {
    const { params } = this.route.snapshot;
    await this.db.object<SoloGame>(`single-player/${params.id}`).update({ currentQuestion: 0, status: 'ON_GOING' });

    this.finisGameSub = this.gameFinished.subscribe(async finished => {
      if (finished) {
        await this.db.object(`single-player/${params.id}`).remove()
        const gameId = this.route.snapshot.params.id;
        await this.router.navigate(['/ver', gameId]);

      }
    });
  }

  ngOnDestroy() {
    this.finisGameSub.unsubscribe();
  }

  selectAnswer(answer: Answer | null): void {
    const sources = combineLatest(this.soloGame, this.currentQuestion, this.timer);
    const update = sources.pipe(
      take(1),
      mergeMap(async ([game, question, timer]) => {
        const timeLeft = timer;
        const correctFactor = !!answer?.correct ? 1 : 0;
        const variation = question.difficulty === 'EASY' ? 1 : question.difficulty === 'NORMAL' ? 1.5 : 2;
        const points = timeLeft * 1 * variation * correctFactor;

        let value = {
          currentQuestion: game.currentQuestion + 1,
          [`questions/${game.currentQuestion}/selected`]: answer,
          [`questions/${game.currentQuestion}/status`]: 'ANSWERED',
          [`questions/${game.currentQuestion}/points`]: points,
        };

        console.log({ game, question, timer, points });
        // game ended
        if (value.currentQuestion === game.questions.length) {
          const created = new Date(game.created);
          const now = new Date();

          const dif = now.getTime() - created.getTime();
          const minutes = dif / 1000 / 60;

          value.status = 'ENDED'
          value.time = minutes
        }

        return await this.db.object(`single-player/${game.id}`).update(value)
      }),
    );

    update.subscribe();

    if (answer)
      if (answer.correct) {
        alert('Respuesta Correcta');
      } else {
        alert('Respuesta incorrecta');
      }
    else
      alert('No selecciono ninguna respuesta')
  }
}
