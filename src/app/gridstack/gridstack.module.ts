import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackComponent } from './gridstack/gridstack.component';
import { GridstackItemComponent } from './gridstack-item/gridstack-item.component';
import { GridstackService } from './gridstack.service';

@NgModule({
  declarations: [
    GridstackComponent,
    GridstackItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridstackComponent,
    GridstackItemComponent
  ],
  providers: [
    GridstackService
  ]
})
export class GridstackModule { }
