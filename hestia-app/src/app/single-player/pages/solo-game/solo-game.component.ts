import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { Answer, Question, SoloGame } from 'src/app/shared/interfaces/solo-game';
import { reverseTimer } from 'src/app/shared/operators/reverse-timer';

@Component({
  selector: 'hestia-solo-game',
  templateUrl: './solo-game.component.html'
})
export class SoloGameComponent implements OnInit {

  constructor(
    public readonly auth: AngularFireAuth,
    public readonly db: AngularFireDatabase,
    private readonly route: ActivatedRoute,
  ) { }

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

  public readonly timer: Observable<number> = this.currentQuestion.pipe(
    switchMap(q => interval(1000).pipe(reverseTimer(q.time))),
    map(t => Math.max(t, 0)),
    tap(t => {
      if (t === 0) this.selectAnswer(null);
    }),
    catchError(() => of(null))
  );

  async ngOnInit(): Promise<void> {
    const { params } = this.route.snapshot;
    await this.db.object<SoloGame>(`single-player/${params.id}`).update({ currentQuestion: 0, status: 'ON_GOING' });
  }

  selectAnswer(answer: Answer | null): void {
    const update = this.soloGame.pipe(
      take(1),
      mergeMap(async game => {
        let value = {
          currentQuestion: game.currentQuestion + 1,
          [`questions/${game.currentQuestion}/selected`]: answer,
          [`questions/${game.currentQuestion}/status`]: 'ANSWERED',
        };

        // game ended

        if (value.currentQuestion === game.questions.length - 1) {
          value.status = 'ENDED'
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
