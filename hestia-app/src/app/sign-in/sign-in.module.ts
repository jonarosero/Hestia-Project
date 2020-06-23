import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { SignInRoutingModule } from './sign-in-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SignInRoutingModule.pages,
  ],
})
export class SignInModule { }
