import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGridstackService } from './services/ngx-gridstack.service';
import { NgxGridstackItemComponent } from './components/ngx-gridstack-item/ngx-gridstack-item.component';
import { NgxGridstackComponent } from './components/ngx-gridstack/ngx-gridstack.component';

@NgModule({
  declarations: [
    NgxGridstackComponent,
    NgxGridstackItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxGridstackComponent,
    NgxGridstackItemComponent
  ],
  providers: [
    NgxGridstackService
  ]
})
export class NgxGridstackModule { }
