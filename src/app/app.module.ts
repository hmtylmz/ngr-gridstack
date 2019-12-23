import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridstackModule } from '@libria/gridstack';
import { GridstackModule as GridStackMineModule } from './gridstack/gridstack.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    GridstackModule.forRoot(),
    GridStackMineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
