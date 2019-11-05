import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterEmailPageComponent } from './enter-email-page.component';

describe('EnterEmailPageComponent', () => {
  let component: EnterEmailPageComponent;
  let fixture: ComponentFixture<EnterEmailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterEmailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
