import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoloGameAvailableGuard } from './guards/solo-game-available.guard';
import { SinglePlayerShellComponent } from './pages/single-player-shell/single-player-shell.component';
import { SoloGameComponent } from './pages/solo-game/solo-game.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { PreloadSoloGameResolver } from './resolvers/preload-solo-game.resolver';


const routes: Routes = [
  {
    path: '', component: SinglePlayerShellComponent, children: [
      { path: '', component: TopicsComponent },
      {
        path: ':id',
        component: SoloGameComponent,
        resolve: { soloGame: PreloadSoloGameResolver },
        canActivate: [SoloGameAvailableGuard],
      }
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
    SoloGameComponent,
  ];

  static resolvers = [
    PreloadSoloGameResolver,
  ];

  static guards = [
    SoloGameAvailableGuard,
  ];
}