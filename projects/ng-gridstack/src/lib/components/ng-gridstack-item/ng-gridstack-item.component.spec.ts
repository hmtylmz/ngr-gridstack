import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGridstackItemComponent } from './ng-gridstack-item.component';

describe('NgGridstackItemComponent', () => {
  let component: NgGridstackItemComponent;
  let fixture: ComponentFixture<NgGridstackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGridstackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGridstackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
