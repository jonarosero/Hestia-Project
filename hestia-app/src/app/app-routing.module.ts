import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'ingresar', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'multijugador', loadChildren: () => import('./multiplayer/multiplayer.module').then(m => m.MultiplayerModule) },
  { path: 'infinito', loadChildren: () => import('./infinite/infinite.module').then(m => m.InfiniteModule) },
  { path: 'solo', loadChildren: () => import('./single-player/single-player.module').then(m => m.SinglePlayerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
