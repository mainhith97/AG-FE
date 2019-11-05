import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCreateproductComponent } from './farmer-createproduct.component';

describe('FarmerCreateproductComponent', () => {
  let component: FarmerCreateproductComponent;
  let fixture: ComponentFixture<FarmerCreateproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerCreateproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCreateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
