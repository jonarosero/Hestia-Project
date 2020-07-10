import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'hestia-new-multiplayer-game',
    templateUrl: './new-multiplayer-game.component.html'
})

export class NewMultiplayerGameComponent implements OnInit {
    constructor(public readonly auth: AngularFireAuth) { }

    ngOnInit() { }
}