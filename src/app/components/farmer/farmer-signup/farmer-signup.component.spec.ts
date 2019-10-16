import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSignupComponent } from './farmer-signup.component';

describe('FarmerSignupComponent', () => {
  let component: FarmerSignupComponent;
  let fixture: ComponentFixture<FarmerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
