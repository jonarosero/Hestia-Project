import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePlayerComponent } from './single-player.component';


const routes: Routes = [
  { path: ':id', component: SinglePlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePlayerRoutingModule { }
