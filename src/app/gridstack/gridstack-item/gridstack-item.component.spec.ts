import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridstackItemComponent } from './gridstack-item.component';

describe('GridstackItemComponent', () => {
  let component: GridstackItemComponent;
  let fixture: ComponentFixture<GridstackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridstackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridstackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
