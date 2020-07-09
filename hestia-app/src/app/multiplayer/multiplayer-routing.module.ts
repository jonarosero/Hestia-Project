import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MultiplayerGameComponent } from './pages/multiplayer-game/multiplayer-game.component';
import { NewMultiplayerGameComponent } from './pages/new-multiplayer-game/new-multiplayer-game.component';
import { StoreMultiplayerComponent } from './pages/store-multiplayer/store-multiplayer.component';


const routes: Routes = [
  { path: 'nuevo/:gameId', component: NewMultiplayerGameComponent },
  { path: 'partida/:gameId', component: MultiplayerGameComponent },
  { path: 'tienda/:gameId', component: StoreMultiplayerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplayerRoutingModule {
  static pages = [

    NewMultiplayerGameComponent,
    StoreMultiplayerComponent,
    MultiplayerGameComponent,
  ];
}
