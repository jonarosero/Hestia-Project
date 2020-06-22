import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglePlayerComponent } from './single-player.component';

const routes: Routes = [{ path: '', component: SinglePlayerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePlayerRoutingModule { }
