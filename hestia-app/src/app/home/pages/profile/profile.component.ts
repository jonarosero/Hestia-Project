import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'hestia-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly router: Router) { }

  ngOnInit(): void { }

  async signOut() {
    try {
      await this.auth.signOut();
      await this.router.navigate(['/ingresar']);
    } catch (error) {
      console.log(error);
    }
  }
}
