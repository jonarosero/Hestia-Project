import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';

export interface User {
  disabled: boolean;
  displayName: string;
  email: string
  joinDate: firestore.Timestamp;
  photoURL: string;
  playedGames: number;
  points: number;
  uid: string;
}

@Component({
  selector: 'hestia-leader-board',
  templateUrl: './leader-board.component.html',
  styles: [
  ]
})
export class LeaderBoardComponent implements OnInit {

  constructor(
    public readonly auth: AngularFireAuth,
    private readonly firestore: AngularFirestore,
  ) { }

  public readonly leaderBoard: Observable<Array<User>> = this.firestore.collection<User>('users', q => q.orderBy('playedGames', 'desc')).valueChanges();

  ngOnInit(): void {
  }

}
