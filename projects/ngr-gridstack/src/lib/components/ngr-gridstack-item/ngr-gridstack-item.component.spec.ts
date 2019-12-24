import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrGridstackItemComponent } from './ngr-gridstack-item.component';

describe('NgrGridstackItemComponent', () => {
  let component: NgrGridstackItemComponent;
  let fixture: ComponentFixture<NgrGridstackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrGridstackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrGridstackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
