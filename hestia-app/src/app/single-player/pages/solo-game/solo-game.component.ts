import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Answer, SoloGame, SoloGameStatus } from 'src/app/shared/interfaces/solo-game';
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
  ) { }

  currentQuestionIndex: number | null = null;
  soloGame: SoloGame;

  public timer: number | null = null;
  // private timerObs: Observable<number> = null;
  private timerSub: Subscription | null = null;

  ngOnInit(): void {
    const game = this.route.data.pipe(
      map(d => d.soloGame as SoloGame)
    );

    game.subscribe(async obj => {
      const { params } = this.route.snapshot;
      await this.db.object<SoloGameStatus>(`single-player/${params.id}/status`).set('ON_GOING');
      this.soloGame = obj;
      this.nextQuestion();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSub)
      this.timerSub.unsubscribe();
  }

  private async nextQuestion(): Promise<void> {
    // set starting index in case user has reloaded the page
    if (this.currentQuestionIndex === null) {
      this.currentQuestionIndex = this.soloGame.questions.findIndex(q => !!q.selected);
    }

    this.currentQuestionIndex++;

    // validate there are more questions on the way
    // game ended
    if (this.currentQuestionIndex >= this.soloGame.questions.length) {
      const { params } = this.route.snapshot;
      await this.db.object<SoloGameStatus>(`single-player/${params.id}/status`).set('ENDED');
      console.log('Game finished');
      return;
    }

    // next question please!!!
    // increment timer
    // create a new timer for new current
    const current = this.soloGame.questions[this.currentQuestionIndex];

    const timerObs = interval(1000).pipe(reverseTimer(current.time));
    this.timerSub = timerObs.subscribe(async timer => {
      this.timer = timer;

      // current timer ended
      // unsubscribe to current timer to reset
      // call for next question
      if (timer === 0) {
        const { params } = this.route.snapshot;
        await this.db.object(`single-player/${params.id}/questions/${this.currentQuestionIndex}/selected`).set('NONE');

        this.timerSub.unsubscribe();
        this.timerSub = null;
        this.nextQuestion();

      }
    })
  }

  async selectAnswer(questionIndex: number, answer: Answer) {
    const { params } = this.route.snapshot;
    console.log({ answer });
    await this.db.object(`single-player/${params.id}/questions/${questionIndex}/selected`).set(answer);

    if (answer.correct) {
      alert('Respuesta Correcta');
    } else {
      alert('Respuesta incorrecta');
    }

    this.timerSub.unsubscribe();
    this.timerSub = null;
    this.timer = null;
    this.nextQuestion();
  }
}
