import { Component, OnInit, HostBinding, ChangeDetectionStrategy, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gridstack-item',
  templateUrl: './gridstack-item.component.html',
  styleUrls: ['./gridstack-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridstackItemComponent implements OnInit {
  @HostBinding('class') class = 'grid-stack-item';

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

  private element: HTMLElement;

  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
  }

}
