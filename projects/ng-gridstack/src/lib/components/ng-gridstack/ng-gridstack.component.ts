/// <reference types="jquery" />
/// <reference types="gridstack" />

import {
  Component, ChangeDetectionStrategy, ElementRef, Input, ContentChildren, QueryList, Renderer2, OnInit, Output, EventEmitter
} from '@angular/core';
import { NgGridstackItemComponent } from '../ng-gridstack-item/ng-gridstack-item.component';
import { NgGridstackService } from '../../services/ng-gridstack.service';

@Component({
  selector: 'ng-gridstack',
  templateUrl: './ng-gridstack.component.html',
  styleUrls: ['./ng-gridstack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgGridstackComponent implements OnInit {
  @ContentChildren(NgGridstackItemComponent) items: QueryList<NgGridstackItemComponent>;

  @Input() options: GridstackOptions;
  @Output() change = new EventEmitter<any>();

  previousItems: Array<HTMLElement>;
  element: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private gridstackService: NgGridstackService) {
    this.element = this.elementRef.nativeElement;
    this.renderer.addClass(this.element, 'grid-stack');
  }

  ngOnInit() {
    jQuery(this.element).gridstack(this.options);
    this.gridstackService.grid = jQuery(this.element).data('gridstack');
    jQuery(this.element).on('change', (event, items) => this.change.emit(items));
  }

}
