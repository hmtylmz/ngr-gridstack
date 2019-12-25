export interface GridstackItem {
  x: number;
  y: number;
  width: number;
  height: number;
  autoPosition: boolean;
  minWidth: string;
  maxWidth: string;
  minHeight: string;
  maxHeight: string;
  id: string;
  noResize: boolean;
  noMove: boolean;
  locked: boolean;
  resizeHandles: boolean;
  lastTriedX: number;
  lastTriedY: number;
  lastTriedWidth: number;
  lastTriedHeight: number;
  el: HTMLElement;
  _dirty: boolean;
  _id: number;
  _origY: number;
}
