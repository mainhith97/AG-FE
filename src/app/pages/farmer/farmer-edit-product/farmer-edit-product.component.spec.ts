import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerEditProductComponent } from './farmer-edit-product.component';

describe('FarmerEditProductComponent', () => {
  let component: FarmerEditProductComponent;
  let fixture: ComponentFixture<FarmerEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
