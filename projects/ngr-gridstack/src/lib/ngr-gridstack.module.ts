import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrGridstackService } from './services/ngr-gridstack.service';
import { NgrGridstackItemComponent } from './components/ngr-gridstack-item/ngr-gridstack-item.component';
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
    NgrGridstackService
  ]
})
export class NgrGridstackModule { }
