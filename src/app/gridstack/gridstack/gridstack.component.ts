import { Component, HostBinding, AfterViewInit, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-gridstack',
  templateUrl: './gridstack.component.html',
  styleUrls: ['./gridstack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridstackComponent implements AfterViewInit {
  @HostBinding('class') class = 'grid-stack';

  @Input() options: any;

  element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  ngAfterViewInit() {
    jQuery(this.element).gridstack(this.options);
  }

}
