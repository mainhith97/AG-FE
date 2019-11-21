import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRefusalReasonComponent } from './farmer-refusal-reason.component';

describe('FarmerRefusalReasonComponent', () => {
  let component: FarmerRefusalReasonComponent;
  let fixture: ComponentFixture<FarmerRefusalReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerRefusalReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRefusalReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
