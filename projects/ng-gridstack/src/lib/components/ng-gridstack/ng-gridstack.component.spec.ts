import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGridstackComponent } from './ng-gridstack.component';

describe('NgGridstackComponent', () => {
  let component: NgGridstackComponent;
  let fixture: ComponentFixture<NgGridstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGridstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGridstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
