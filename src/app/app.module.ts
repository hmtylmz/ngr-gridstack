import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgrGridstackModule } from 'projects/ngr-gridstack/src/lib/ngr-gridstack.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgrGridstackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
