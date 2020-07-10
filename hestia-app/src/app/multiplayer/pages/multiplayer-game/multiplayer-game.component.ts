import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'hestia-multiplayer-game',
    templateUrl: './multiplayer-game.component.html'
})

export class MultiplayerGameComponent implements OnInit {
    constructor(public readonly auth: AngularFireAuth,) { }

    ngOnInit() { }
}