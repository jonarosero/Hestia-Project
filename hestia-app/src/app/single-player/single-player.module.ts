import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SinglePlayerRoutingModule } from './single-player-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SinglePlayerRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SinglePlayerRoutingModule.pages,
  ],
  providers: [
    SinglePlayerRoutingModule.resolvers,
  ]
})
export class SinglePlayerModule { }