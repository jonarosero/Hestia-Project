import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'hestia-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

  constructor(private readonly auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async signInWithGoogle() {
    var provider = new auth.GoogleAuthProvider();
    await this.auth.signInWithRedirect(provider);
  }

  async signInWithFacebook() {
    var provider = new auth.FacebookAuthProvider();
    provider.addScope('email');
    await this.auth.signInWithRedirect(provider);
  }

  async signInWithTwitter() {
    var provider = new auth.TwitterAuthProvider();
    await this.auth.signInWithRedirect(provider);
  }

}
