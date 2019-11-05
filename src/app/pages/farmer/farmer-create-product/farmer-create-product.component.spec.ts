import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCreateProductComponent } from './farmer-create-product.component';

describe('FarmerCreateProductComponent', () => {
  let component: FarmerCreateProductComponent;
  let fixture: ComponentFixture<FarmerCreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerCreateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
