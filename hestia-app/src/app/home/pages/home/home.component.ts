import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'hestia-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public readonly auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
