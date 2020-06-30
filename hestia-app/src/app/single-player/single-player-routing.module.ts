import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePlayerComponent } from './pages/single-player/single-player.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { SinglePlayerShellComponent } from './single-player-shell.component';


const routes: Routes = [
  {
    path: '', component: SinglePlayerShellComponent, children: [
      { path: '', component: TopicsComponent },
      { path: ':id', component: SinglePlayerComponent }
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