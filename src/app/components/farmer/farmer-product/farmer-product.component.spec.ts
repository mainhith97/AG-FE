import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerProductComponent } from './farmer-product.component';

describe('FarmerProductComponent', () => {
  let component: FarmerProductComponent;
  let fixture: ComponentFixture<FarmerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
