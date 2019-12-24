import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgGridstackService } from './services/ng-gridstack.service';
import { NgGridstackItemComponent } from './components/ng-gridstack-item/ng-gridstack-item.component';
import { NgGridstackComponent } from './components/ng-gridstack/ng-gridstack.component';

@NgModule({
  declarations: [
    NgGridstackComponent,
    NgGridstackItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgGridstackComponent,
    NgGridstackItemComponent
  ],
  providers: [
    NgGridstackService
  ]
})
export class NgGridstackModule { }
