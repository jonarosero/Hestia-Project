import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlimpoComponent } from './pages/olimpo/olimpo.component';
import { MultiplayerComponent } from './pages/multiplayer/multiplayer.component';
import { MultiplayerShellComponent } from './multiplayer-shell.component';


const routes: Routes = [
  {
    path: '', component: MultiplayerShellComponent, children: [
      { path: '', component: OlimpoComponent },
      { path: ':id', component: MultiplayerComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplayerRoutingModule {
  static pages = [
    MultiplayerShellComponent,
    OlimpoComponent,
    MultiplayerComponent,
  ];
}