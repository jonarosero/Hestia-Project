import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellComponent } from './home-shell.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewGameComponent } from './pages/view-game/view-game.component';


const routes: Routes = [
  {
    path: '', component: HomeShellComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'perfil', component: ProfileComponent },
      { path: 'configuracion', component: ConfigurationComponent },
      { path: 'tablero', component: LeaderBoardComponent },
      {
        path: 'ver/:gameId',
        component: ViewGameComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static pages = [
    HomeShellComponent,
    HomeComponent,
    ProfileComponent,
    ConfigurationComponent,
    LeaderBoardComponent,
    ViewGameComponent
  ];
}
