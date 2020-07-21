import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface PlayedGame {
    id: string;
}

@Component({
    selector: 'hestia-view-game',
    templateUrl: './view-game.component.html'
})

export class ViewGameComponent implements OnInit {

    public readonly game: Observable<PlayedGame> = zip(this.auth.user, this.route.params).pipe(
        map(([user, params]) => this.firestore.collection('users').doc(user.uid).collection('games-played').doc<PlayedGame>(params.gameId)),
        switchMap(ref => ref.valueChanges())
    )

    constructor(
        private readonly auth: AngularFireAuth,
        private readonly route: ActivatedRoute,
        private readonly firestore: AngularFirestore,
    ) { }

    ngOnInit() { }
}