import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularBillboardModule } from 'angular-billboard';
import { ChartComponent } from './chart/chart.component';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule } from '@angular/material';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularBillboardModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
