import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBytypeComponent } from './product-bytype.component';

describe('ProductBytypeComponent', () => {
  let component: ProductBytypeComponent;
  let fixture: ComponentFixture<ProductBytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
