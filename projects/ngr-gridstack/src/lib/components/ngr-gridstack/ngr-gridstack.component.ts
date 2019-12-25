/// <reference types="jquery" />
/// <reference types="gridstack" />

import {
  Component, ChangeDetectionStrategy, ElementRef, Input, ContentChildren, QueryList, Renderer2, OnInit, Output, EventEmitter
} from '@angular/core';
import { NgrGridstackItemComponent } from '../ngr-gridstack-item/ngr-gridstack-item.component';
import { NgrGridstackService } from '../../services/ngr-gridstack.service';
import { GridstackItem } from '../../models/gridstack-item.interface';

@Component({
  selector: 'ngr-gridstack',
  templateUrl: './ngr-gridstack.component.html',
  styleUrls: ['./ngr-gridstack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrGridstackComponent implements OnInit {
  @Input() options: GridstackOptions;
  @Output() added = new EventEmitter<GridstackItem[]>();
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter<GridstackItem[]>();
  @Output() disable = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-native
  @Output() dragstart = new EventEmitter<GridstackItem>();
  @Output() dragstop = new EventEmitter<GridstackItem>();
  @Output() dropped = new EventEmitter<GridstackItem[]>();
  @Output() enable = new EventEmitter<any>();
  @Output() removed = new EventEmitter<GridstackItem[]>();
  @Output() resizestart = new EventEmitter<GridstackItem>();
  @Output() gsresizestop = new EventEmitter<GridstackItem>();

  element: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private gridstackService: NgrGridstackService) {
    this.element = this.elementRef.nativeElement;
    this.renderer.addClass(this.element, 'grid-stack');
  }

  ngOnInit() {
    jQuery(this.element).gridstack(this.options);
    this.gridstackService.grid = jQuery(this.element).data('gridstack');
    jQuery(this.element).on('added', (event, items: GridstackItem[]) => this.added.emit(items));
    jQuery(this.element).on('change', (event, items: GridstackItem[]) => this.change.emit(items));
    jQuery(this.element).on('disable', (event) => this.disable.emit(event.target));
    jQuery(this.element).on('dragstart', (event, item: GridstackItem) => this.dragstart.emit(item));
    jQuery(this.element).on('dragstop', (event, item: GridstackItem) => this.dragstop.emit(item));
    jQuery(this.element).on('dropped', (event, previousWidget, newWidget) => this.dropped.emit([previousWidget, newWidget]));
    jQuery(this.element).on('enable', (event) => this.enable.emit(event.target));
    jQuery(this.element).on('removed', (event, items: GridstackItem[]) => this.removed.emit(items));
    jQuery(this.element).on('resizestart', (event, item: GridstackItem) => this.resizestart.emit(item));
    jQuery(this.element).on('gsresizestop', (event, item: GridstackItem) => this.gsresizestop.emit(item));
  }

}
