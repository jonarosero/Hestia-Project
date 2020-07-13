import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'hestia-leader-board',
  templateUrl: './leader-board.component.html',
  styles: [
  ]
})
export class LeaderBoardComponent implements OnInit {

  constructor(public readonly auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
