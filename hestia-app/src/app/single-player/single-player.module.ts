import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePlayerRoutingModule } from './single-player-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SinglePlayerRoutingModule
  ],
  declarations: [
    SinglePlayerRoutingModule.pages,
  ],
})
export class SinglePlayerModule { }