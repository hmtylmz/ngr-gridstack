import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrGridstackComponent } from './ngr-gridstack.component';

describe('NgrGridstackComponent', () => {
  let component: NgrGridstackComponent;
  let fixture: ComponentFixture<NgrGridstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrGridstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrGridstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
