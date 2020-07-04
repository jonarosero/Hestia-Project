import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { SoloGame } from 'src/app/shared/interfaces/solo-game';

@Injectable({ providedIn: 'root' })
export class PreloadSoloGameResolver implements Resolve<SoloGame> {

    constructor(
        private readonly database: AngularFireDatabase,
    ) { }

    resolve({ params }: ActivatedRouteSnapshot): Observable<SoloGame> {
        console.log('asdas');

        return this.database.object<SoloGame>(`single-player/${params.id}`)
            .valueChanges()
            // .pipe(map(snap => snap.payload.val()));
            .pipe(
                first()
            );
    }
}