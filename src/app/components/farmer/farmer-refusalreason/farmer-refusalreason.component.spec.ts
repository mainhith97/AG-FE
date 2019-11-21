import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRefusalreasonComponent } from './farmer-refusalreason.component';

describe('FarmerRefusalreasonComponent', () => {
  let component: FarmerRefusalreasonComponent;
  let fixture: ComponentFixture<FarmerRefusalreasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerRefusalreasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRefusalreasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
