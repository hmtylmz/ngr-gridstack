/// <reference types="jquery" />
/// <reference types="gridstack" />

import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, Renderer2
} from '@angular/core';

@Component({
  selector: 'ngr-gridstack-item',
  templateUrl: './ngr-gridstack-item.component.html',
  styleUrls: ['./ngr-gridstack-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrGridstackItemComponent implements AfterViewInit, OnDestroy {
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

  @Input() set minWidth(value: number) {
    if (value !== this._minWidth) {
      this._minWidth = value;
      this.renderer.setAttribute(this.element, 'data-gs-min-width', this._minWidth.toString());
      this.resize();
    }
  }
  get minWidth(): number {
    return this._minWidth;
  }

  @Input() set maxWidth(value: number) {
    if (value !== this._maxWidth) {
      this._maxWidth = value;
      this.renderer.setAttribute(this.element, 'data-gs-max-width', this._maxWidth.toString());
      this.resize();
    }
  }
  get maxWidth(): number {
    return this._maxWidth;
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

  @Input() set minHeight(value: number) {
    if (value !== this._minHeight) {
      this._minHeight = value;
      this.renderer.setAttribute(this.element, 'data-gs-min-height', this._minHeight.toString());
      this.resize();
    }
  }
  get minHeight(): number {
    return this._height;
  }

  @Input() set maxHeight(value: number) {
    if (value !== this._maxHeight) {
      this._maxHeight = value;
      this.renderer.setAttribute(this.element, 'data-gs-max-height', this._maxHeight.toString());
      this.resize();
    }
  }
  get maxHeight(): number {
    return this._maxHeight;
  }

  @Input() set noResize(value: boolean) {
    if (value !== this._noResize) {
      this._noResize = value;
      this.renderer.setAttribute(this.element, 'data-gs-no-resize', this._noResize.toString());
      this.resize();
    }
  }
  get noResize(): boolean {
    return this._noResize;
  }

  @Input() set noMove(value: boolean) {
    if (value !== this._noMove) {
      this._noMove = value;
      this.renderer.setAttribute(this.element, 'data-gs-no-resize', this._noMove.toString());
      this.resize();
    }
  }
  get noMove(): boolean {
    return this._noMove;
  }

  @Input() set autoPosition(value: boolean) {
    if (value !== this._autoPosition) {
      this._autoPosition = value;
      this.renderer.setAttribute(this.element, 'data-gs-auto-position', this._autoPosition.toString());
      this.resize();
    }
  }
  get autoPosition(): boolean {
    return this._autoPosition;
  }

  @Input() set locked(value: boolean) {
    if (value !== this._locked) {
      this._locked = value;
      this.renderer.setAttribute(this.element, 'data-gs-locked', this._locked.toString());
      this.resize();
    }
  }
  get locked(): boolean {
    return this._locked;
  }

  @Input() set resizeHandles(value: boolean) {
    if (value !== this._resizeHandles) {
      this._resizeHandles = value;
      this.renderer.setAttribute(this.element, 'data-gs-resize-handles', this._resizeHandles.toString());
      this.resize();
    }
  }
  get resizeHandles(): boolean {
    return this._resizeHandles;
  }

  element: HTMLElement;
  grid: GridStack;

  private _x: number;
  private _y: number;
  private _width: number;
  private _minWidth: number;
  private _maxWidth: number;
  private _height: number;
  private _minHeight: number;
  private _maxHeight: number;
  private _noResize: boolean;
  private _noMove: boolean;
  private _autoPosition: boolean;
  private _locked: boolean;
  private _resizeHandles: boolean;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
    this.renderer.addClass(this.element, 'grid-stack-item');
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.element, 'data-gs-id', this.id);
    this.init();
  }

  ngOnDestroy(): void {
    this.grid.removeWidget(this.element);
  }

  setGrid(grid: GridStack): void {
    if (!this.grid) {
      this.grid = grid;
      this.init();
    }
  }

  init() {
    if (this.grid) {
      if (this.grid.willItFit(this.x, this.y, this.width, this.height, true)) {
        this.grid.makeWidget(this.element);
      } else {
        console.error('Not enough free space to place the widget');
      }
    }
  }

  private move() {
    if (this.grid) {
      this.grid.move(this.element, this.x, this.y);
    }
  }

  private resize() {
    if (this.grid) {
      this.grid.resize(this.element, this.width, this.height);
    }
  }

}
