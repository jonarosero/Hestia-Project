import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'hestia-infinite-game',
  templateUrl: './infinite-game.component.html',
  styles: [
  ]
})
export class InfiniteGameComponent implements OnInit {

  constructor(public readonly auth: AngularFireAuth,) { }

  ngOnInit(): void {
  }

}
