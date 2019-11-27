import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBySupplierPageComponent } from './product-by-supplier-page.component';

describe('ProductBySupplierPageComponent', () => {
  let component: ProductBySupplierPageComponent;
  let fixture: ComponentFixture<ProductBySupplierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBySupplierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBySupplierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
