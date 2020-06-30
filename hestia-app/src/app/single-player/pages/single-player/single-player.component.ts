import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'hestia-single-player',
  templateUrl: './single-player.component.html'
})
export class SinglePlayerComponent implements OnInit {

  constructor(public readonly auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
