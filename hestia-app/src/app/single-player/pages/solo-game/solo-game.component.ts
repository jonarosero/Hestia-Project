import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question, SoloGame } from 'src/app/shared/interfaces/solo-game';
import { reverseTimer } from 'src/app/shared/operators/reverse-timer';



@Component({
  selector: 'hestia-solo-game',
  templateUrl: './solo-game.component.html'
})
export class SoloGameComponent implements OnInit, OnDestroy {

  constructor(
    public readonly auth: AngularFireAuth,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
  ) { }

  currentQuestionIndex: number;
  currentQuestionForm: FormGroup;
  currentQuestion: Question;
  soloGame: SoloGame;
  timerObs: Observable<number> | null;

  private nextQuestion: Subscription;

  ngOnInit(): void {
    const dbGame = this.route.data.pipe(
      map(d => this.soloGame = d.soloGame)
    );

    dbGame.subscribe(obj => {
      this.soloGame = obj;
      this.initGame();
    });
  }

  ngOnDestroy(): void {
    this.nextQuestion.unsubscribe();
  }

  private initGame() {
    if (this.nextQuestion) return;

    const questionTimer = interval(15 * 100)
    this.nextQuestion = questionTimer.subscribe(i => {

      this.currentQuestionIndex = i;
      if (i < this.soloGame.questions.length) {
        this.currentQuestion = this.soloGame.questions[this.currentQuestionIndex];
        const formControls = this.currentQuestion.answers.reduce((controls, a, idx) => controls[idx] = [null], {});
        console.log(formControls);

        this.currentQuestionForm = this.fb.group(formControls);

        this.timerObs = interval(1000).pipe(reverseTimer(this.currentQuestion.time));

      } else {


      }
    });
  }
}
