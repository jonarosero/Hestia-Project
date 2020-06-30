import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'hestia-single-player',
  templateUrl: './topics.component.html'
})
export class TopicsComponent implements OnInit {

  constructor(public readonly auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
