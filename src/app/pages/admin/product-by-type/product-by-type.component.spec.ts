import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByTypeComponent } from './product-by-type.component';

describe('ProductByTypeComponent', () => {
  let component: ProductByTypeComponent;
  let fixture: ComponentFixture<ProductByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
