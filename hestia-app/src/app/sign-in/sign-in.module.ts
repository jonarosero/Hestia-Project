import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInRoutingModule } from './sign-in-routing.module';



@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule
  ],
  declarations: [
    SignInRoutingModule.pages,
  ],
})
export class SignInModule { }
