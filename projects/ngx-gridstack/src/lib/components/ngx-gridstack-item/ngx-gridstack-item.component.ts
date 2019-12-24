/// <reference types="jquery" />
/// <reference types="gridstack" />

import { Component, ChangeDetectionStrategy, Input, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { NgxGridstackService } from '../../services/ngx-gridstack.service';

@Component({
  selector: 'ngx-gridstack-item',
  templateUrl: './ngx-gridstack-item.component.html',
  styleUrls: ['./ngx-gridstack-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGridstackItemComponent implements AfterViewInit, OnDestroy {
  @Input() id: string;

  @Input() set x(value: number) {
    if (value !== this._x) {
      this._x = value;
      this.renderer.setAttribute(this.element, 'data-gs-x', this._x.toString());
      this.move();
    }
  }
  get x(): number {
    return this._x;
  }

  @Input() set y(value: number) {
    if (value !== this._y) {
      this._y = value;
      this.renderer.setAttribute(this.element, 'data-gs-y', this._y.toString());
      this.move();
    }
  }
  get y(): number {
    return this._y;
  }

  @Input() set width(value: number) {
    if (value !== this._width) {
      this._width = value;
      this.renderer.setAttribute(this.element, 'data-gs-width', this._width.toString());
      this.resize();
    }
  }
  get width(): number {
    return this._width;
  }

  @Input() set height(value: number) {
    if (value !== this._height) {
      this._height = value;
      this.renderer.setAttribute(this.element, 'data-gs-height', this._height.toString());
      this.resize();
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
    private gridstackService: NgxGridstackService) {
    this.element = this.elementRef.nativeElement;
    this.renderer.addClass(this.element, 'grid-stack-item');
    this.renderer.setAttribute(this.element, 'data-gs-no-resize', false.toString());
    this.renderer.setAttribute(this.element, 'data-gs-no-move', false.toString());
    this.renderer.setAttribute(this.element, 'data-gs-locked', false.toString());
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.element, 'data-gs-id', this.id);
    if (this.gridstackService.grid.willItFit(this.x, this.y, this.width, this.height, true)) {
      this.gridstackService.grid.makeWidget(this.element);
    } else {
      console.error('Not enough free space to place the widget');
    }
  }

  ngOnDestroy(): void {
    this.gridstackService.grid.removeWidget(this.element);
  }

  private move() {
    this.gridstackService.grid.move(this.element, this.x, this.y);
  }

  private resize() {
    this.gridstackService.grid.resize(this.element, this.width, this.height);
  }

}
