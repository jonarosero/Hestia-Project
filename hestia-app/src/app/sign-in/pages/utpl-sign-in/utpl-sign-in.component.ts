import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { auth } from 'firebase';

@Component({
  selector: 'hestia-utpl-sign-in',
  templateUrl: './utpl-sign-in.component.html'
})
export class UtplSignInComponent implements OnInit {

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly fb: FormBuilder,
  ) { }

  public signInForm: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: [null, Validators.required]
    });
  }

  async signInWithUtpl() {
    const { value, invalid } = this.usernameControl;
    this.signInForm.markAsTouched();

    if (invalid) return;

    const microsoftProvider = new auth.OAuthProvider('microsoft.com');

    microsoftProvider.setCustomParameters({
      prompt: 'login',
      login_hint: `${value}@utpl.edu.ec`,
      tenant: '6eeb49aa-436d-43e6-becd-bbdf79e5077d'
    });

    return await this.auth.signInWithRedirect(microsoftProvider);
  }

  get usernameControl(): AbstractControl {
    return this.signInForm.controls.username;
  }

}
