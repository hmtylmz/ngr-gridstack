import {
  Component, HostBinding, AfterViewInit, ChangeDetectionStrategy, ElementRef, Input, ContentChildren, QueryList, Renderer2, OnInit
} from '@angular/core';
import { GridstackItemComponent } from '../gridstack-item/gridstack-item.component';
import { GridstackService } from '../gridstack.service';

declare let jQuery: any;

@Component({
  selector: 'app-gridstack',
  templateUrl: './gridstack.component.html',
  styleUrls: ['./gridstack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridstackComponent implements OnInit {
  @ContentChildren(GridstackItemComponent) items: QueryList<GridstackItemComponent>;

  @Input() options: any;

  previousItems: Array<HTMLElement>;
  element: HTMLElement;

  grid: any;

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
  }

}
