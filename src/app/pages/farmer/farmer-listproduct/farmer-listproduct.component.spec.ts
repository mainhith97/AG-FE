import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerListproductComponent } from './farmer-listproduct.component';

describe('FarmerListproductComponent', () => {
  let component: FarmerListproductComponent;
  let fixture: ComponentFixture<FarmerListproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerListproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerListproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
