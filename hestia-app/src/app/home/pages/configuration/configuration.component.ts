import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'hestia-configuration',
  templateUrl: './configuration.component.html',
  styles: [
  ]
})
export class ConfigurationComponent implements OnInit {

  constructor( 
    public readonly auth: AngularFireAuth,
    private readonly router: Router) { }


  ngOnInit(): void {
  }
  async signOut() {
    try {
      await this.auth.signOut();
      await this.router.navigate(['/ingresar']);
    } catch (error) {
      console.log(error);
    }
  }

}
