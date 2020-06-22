import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePlayerRoutingModule } from './single-player-routing.module';
import { SinglePlayerComponent } from './single-player.component';


@NgModule({
  declarations: [SinglePlayerComponent],
  imports: [
    CommonModule,
    SinglePlayerRoutingModule
  ]
})
export class SinglePlayerModule { }
