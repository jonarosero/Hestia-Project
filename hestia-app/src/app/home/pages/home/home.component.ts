import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';

@Component({
  selector: 'hestia-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    public readonly auth: AngularFireAuth,
    private readonly functions: AngularFireFunctions,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  createSoloGame() {
    const callable = this.functions.httpsCallable('createSoloGame');

    callable({}).subscribe(key => this.router.navigate(['/solo', key]));
  }

}
