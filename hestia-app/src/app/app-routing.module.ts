import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';


const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['ingresar']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'multijugador',
    loadChildren: () => import('./multiplayer/multiplayer.module').then(m => m.MultiplayerModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'infinito',
    loadChildren: () => import('./infinite/infinite.module').then(m => m.InfiniteModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'solo',
    loadChildren: () => import('./single-player/single-player.module').then(m => m.SinglePlayerModule),
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
