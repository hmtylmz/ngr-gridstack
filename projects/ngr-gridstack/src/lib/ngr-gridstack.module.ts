import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NgrGridstackItemComponent
} from './components/ngr-gridstack-item/ngr-gridstack-item.component';
import { NgrGridstackComponent } from './components/ngr-gridstack/ngr-gridstack.component';

@NgModule({
  declarations: [
    NgrGridstackComponent,
    NgrGridstackItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgrGridstackComponent,
    NgrGridstackItemComponent
  ],
  providers: [
  ]
})
export class NgrGridstackModule { }
