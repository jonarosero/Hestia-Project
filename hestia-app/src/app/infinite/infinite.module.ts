import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteRoutingModule } from './infinite-routing.module';



@NgModule({
  declarations: [
    InfiniteRoutingModule.pages
  ],
  imports: [
    CommonModule,
    InfiniteRoutingModule
  ]
})
export class InfiniteModule { }
