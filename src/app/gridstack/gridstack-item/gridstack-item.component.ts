import { Component, OnInit, HostBinding, ChangeDetectionStrategy, Input, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { GridstackService } from '../gridstack.service';

declare let jQuery: any;

@Component({
  selector: 'app-gridstack-item',
  templateUrl: './gridstack-item.component.html',
  styleUrls: ['./gridstack-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridstackItemComponent implements AfterViewInit {
  @Input() set x(value: number) {
    if (value !== this._x) {
      this._x = value;
      this.renderer.setAttribute(this.element, 'data-gs-x', this._x.toString());
    }
  }
  get x(): number {
    return this._x;
  }

  @Input() set y(value: number) {
    if (value !== this._y) {
      this._y = value;
      this.renderer.setAttribute(this.element, 'data-gs-y', this._y.toString());
    }
  }
  get y(): number {
    return this._y;
  }

  @Input() set width(value: number) {
    if (value !== this._width) {
      this._width = value;
      this.renderer.setAttribute(this.element, 'data-gs-width', this._width.toString());
    }
  }
  get width(): number {
    return this._width;
  }

  @Input() set height(value: number) {
    if (value !== this._height) {
      this._height = value;
      this.renderer.setAttribute(this.element, 'data-gs-height', this._height.toString());
    }
  }
  get height(): number {
    return this._height;
  }

  element: HTMLElement;

  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private gridstackService: GridstackService) {
    this.element = this.elementRef.nativeElement;
    this.renderer.addClass(this.element, 'grid-stack-item');
    this.renderer.setAttribute(this.element, 'data-gs-no-resize', false.toString());
    this.renderer.setAttribute(this.element, 'data-gs-no-move', false.toString());
    this.renderer.setAttribute(this.element, 'data-gs-locked', false.toString());
  }

  ngAfterViewInit() {
    console.log(this.gridstackService.grid);
    if (this.gridstackService.grid.willItFit(this.x, this.y, this.width, this.height, true)) {
      this.gridstackService.grid.makeWidget(this.element);
    } else {
      console.error('Not enough free space to place the widget');
    }
  }

}
