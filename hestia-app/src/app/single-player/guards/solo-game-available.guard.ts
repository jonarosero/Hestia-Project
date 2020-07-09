import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { SoloGameStatus } from 'src/app/shared/interfaces/solo-game';

@Injectable({ providedIn: 'root' })
export class SoloGameAvailableGuard implements CanActivate {
    constructor(
        private readonly database: AngularFireDatabase,
        private readonly router: Router,
    ) { }

    canActivate({ params }: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
        return this.database.object<SoloGameStatus>(`single-player/${params.id}/status`)
            .snapshotChanges()
            .pipe(
                first(),
                map(({ payload }) => {

                    // validate game still existes
                    if (!payload.exists) {
                        alert('No se encontró el juego solicitado.');
                        return this.router.createUrlTree(['/']);
                    }

                    // validate current game status is available
                    const availableGames = ['ON_GOING', 'STARTING'];
                    const currentStatus = payload.val();

                    // available wii!!!!
                    if (availableGames.includes(currentStatus))
                        return true;

                    // game already ended
                    alert('El juego ha finalizado')
                    return this.router.createUrlTree(['/']);
                }),
            );
    }
}