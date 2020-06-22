import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteRoutingModule } from './infinite-routing.module';
import { InfiniteComponent } from './infinite.component';


@NgModule({
  declarations: [InfiniteComponent],
  imports: [
    CommonModule,
    InfiniteRoutingModule
  ]
})
export class InfiniteModule { }
