import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultiplayerRoutingModule } from './multiplayer-routing.module';

@NgModule({
  declarations: [
    MultiplayerRoutingModule.pages,
  ],
  imports: [
    CommonModule,
    MultiplayerRoutingModule,
  ]
})
export class MultiplayerModule { }
