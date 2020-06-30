import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePlayerShellComponent } from './single-player-shell.component';
import { SinglePlayerComponent } from './pages/single-player/single-player.component';
import { TopicsComponent } from './pages/topics/topics.component';


const routes: Routes = [
  {
    path: '', component: SinglePlayerShellComponent, children: [
      { path: '', component: TopicsComponent},
      { path: 'partida', component: SinglePlayerComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePlayerRoutingModule { 
  static pages = [
    SinglePlayerShellComponent,
    TopicsComponent,
    SinglePlayerComponent,
  ];
}