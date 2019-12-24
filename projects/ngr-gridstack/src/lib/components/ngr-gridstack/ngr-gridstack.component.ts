/// <reference types="jquery" />
/// <reference types="gridstack" />

import {
  Component, ChangeDetectionStrategy, ElementRef, Input, ContentChildren, QueryList, Renderer2, OnInit, Output, EventEmitter
} from '@angular/core';
import { NgrGridstackItemComponent } from '../ngr-gridstack-item/ngr-gridstack-item.component';
import { NgrGridstackService } from '../../services/ngr-gridstack.service';

@Component({
  selector: 'ngr-gridstack',
  templateUrl: './ngr-gridstack.component.html',
  styleUrls: ['./ngr-gridstack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrGridstackComponent implements OnInit {
  // @ContentChildren(NgGridstackItemComponent) items: QueryList<NgGridstackItemComponent>;

  @Input() options: GridstackOptions;
  @Output() change = new EventEmitter<any>();

  previousItems: Array<HTMLElement>;
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
    jQuery(this.element).on('change', (event, items) => this.change.emit(items));
  }

}
