import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularBillboardModule } from 'angular-billboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularBillboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
