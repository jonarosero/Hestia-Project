import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfiniteGameComponent } from './pages/infinite-game/infinite-game.component';


const routes: Routes = [
  { path: 'partida/:id', component: InfiniteGameComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteRoutingModule {
  static pages = [

    InfiniteGameComponent,
  ];
}
