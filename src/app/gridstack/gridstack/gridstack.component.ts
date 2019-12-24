/// <reference types="jquery" />
/// <reference types="gridstack" />

import {
  Component, ChangeDetectionStrategy, ElementRef, Input, ContentChildren, QueryList, Renderer2, OnInit, Output, EventEmitter
} from '@angular/core';
import { GridstackItemComponent } from '../gridstack-item/gridstack-item.component';
import { GridstackService } from '../gridstack.service';

@Component({
  selector: 'app-gridstack',
  templateUrl: './gridstack.component.html',
  styleUrls: ['./gridstack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridstackComponent implements OnInit {
  @ContentChildren(GridstackItemComponent) items: QueryList<GridstackItemComponent>;

  @Input() options: GridstackOptions;
  @Output() change = new EventEmitter<any>();

  previousItems: Array<HTMLElement>;
  element: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private gridstackService: GridstackService) {
    this.element = this.elementRef.nativeElement;
    this.renderer.addClass(this.element, 'grid-stack');
  }

  ngOnInit() {
    jQuery(this.element).gridstack(this.options);
    this.gridstackService.grid = jQuery(this.element).data('gridstack');
    jQuery(this.element).on('change', (event, items) => this.change.emit(items));
  }

}
