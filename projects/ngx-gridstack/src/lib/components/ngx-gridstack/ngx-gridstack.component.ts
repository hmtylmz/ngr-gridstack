/// <reference types="jquery" />
/// <reference types="gridstack" />

import {
  Component, ChangeDetectionStrategy, ElementRef, Input, ContentChildren, QueryList, Renderer2, OnInit, Output, EventEmitter
} from '@angular/core';
import { NgxGridstackItemComponent } from '../ngx-gridstack-item/ngx-gridstack-item.component';
import { NgxGridstackService } from '../../services/ngx-gridstack.service';

@Component({
  selector: 'ngx-gridstack',
  templateUrl: './ngx-gridstack.component.html',
  styleUrls: ['./ngx-gridstack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGridstackComponent implements OnInit {
  // @ContentChildren(NgGridstackItemComponent) items: QueryList<NgGridstackItemComponent>;

  @Input() options: GridstackOptions;
  @Output() change = new EventEmitter<any>();

  previousItems: Array<HTMLElement>;
  element: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private gridstackService: NgxGridstackService) {
    this.element = this.elementRef.nativeElement;
    this.renderer.addClass(this.element, 'grid-stack');
  }

  ngOnInit() {
    jQuery(this.element).gridstack(this.options);
    this.gridstackService.grid = jQuery(this.element).data('gridstack');
    jQuery(this.element).on('change', (event, items) => this.change.emit(items));
  }

}
