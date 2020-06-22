import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'configuracion', component: ConfigurationComponent },
  { path: 'tablero', component: LeaderBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static pages = [
    HomeComponent,
    ProfileComponent,
    ConfigurationComponent,
    LeaderBoardComponent,
  ];
}
