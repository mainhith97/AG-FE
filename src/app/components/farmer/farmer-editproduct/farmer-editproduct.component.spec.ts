import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerEditproductComponent } from './farmer-editproduct.component';

describe('FarmerEditproductComponent', () => {
  let component: FarmerEditproductComponent;
  let fixture: ComponentFixture<FarmerEditproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerEditproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerEditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
