import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridstackComponent } from './gridstack.component';

describe('GridstackComponent', () => {
  let component: GridstackComponent;
  let fixture: ComponentFixture<GridstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
