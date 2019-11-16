import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckemailPageComponent } from './checkemail-page.component';

describe('CheckemailPageComponent', () => {
  let component: CheckemailPageComponent;
  let fixture: ComponentFixture<CheckemailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckemailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckemailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
