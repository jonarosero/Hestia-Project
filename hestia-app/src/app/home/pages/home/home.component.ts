import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'hestia-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    public readonly auth: AngularFireAuth,
    private readonly functions: AngularFireFunctions,
    private readonly router: Router) { }

  private createSolo: Observable<boolean>;

  ngOnInit(): void {
    const createSoloGame = this.functions.httpsCallable<any, string>('createSoloGame');
    this.createSolo = createSoloGame({}).pipe(
      mergeMap(async id => await this.router.navigate(['/solo', id])),
      finalize(() => console.log('finalize'))
    );
  }

  createSoloGame() {
    this.createSolo.subscribe();
  }

}
