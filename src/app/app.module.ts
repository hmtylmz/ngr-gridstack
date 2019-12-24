import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgxGridstackModule } from 'projects/ngx-gridstack/src/lib/ngx-gridstack.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgxGridstackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
