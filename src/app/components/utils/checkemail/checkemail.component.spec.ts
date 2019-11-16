import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckemailComponent } from './checkemail.component';

describe('CheckemailComponent', () => {
  let component: CheckemailComponent;
  let fixture: ComponentFixture<CheckemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
