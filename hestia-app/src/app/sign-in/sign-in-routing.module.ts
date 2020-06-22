import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UtplSignInComponent } from './pages/utpl-sign-in/utpl-sign-in.component';


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'utpl', component: UtplSignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule {
  static pages = [
    SignInComponent,
    UtplSignInComponent,
  ];
}
