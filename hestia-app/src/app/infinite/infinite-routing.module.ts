import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteComponent } from './infinite.component';

const routes: Routes = [{ path: '', component: InfiniteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteRoutingModule { }
