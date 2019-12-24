import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGridstackItemComponent } from './ngx-gridstack-item.component';

describe('NgxGridstackItemComponent', () => {
  let component: NgxGridstackItemComponent;
  let fixture: ComponentFixture<NgxGridstackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGridstackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGridstackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
