import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FirebaseModule } from './modules/firebase.mpdule';



@NgModule({
  imports: [
    CommonModule,
    FirebaseModule,
  ],
  declarations: [],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule)
      throw new Error('Core is already loaded. Import it in the AppModule only');
  }

}
