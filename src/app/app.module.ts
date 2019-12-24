import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgGridstackModule } from 'projects/ng-gridstack/src/lib/ng-gridstack.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgGridstackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
