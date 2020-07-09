import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SinglePlayerRoutingModule } from './single-player-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SinglePlayerRoutingModule,
  ],
  declarations: [
    SinglePlayerRoutingModule.pages,
  ],
  providers: [
    SinglePlayerRoutingModule.resolvers,
    SinglePlayerRoutingModule.guards,
  ]
})
export class SinglePlayerModule { }