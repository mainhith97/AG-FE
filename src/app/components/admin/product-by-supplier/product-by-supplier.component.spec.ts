import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBySupplierComponent } from './product-by-supplier.component';

describe('ProductBySupplierComponent', () => {
  let component: ProductBySupplierComponent;
  let fixture: ComponentFixture<ProductBySupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBySupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBySupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
