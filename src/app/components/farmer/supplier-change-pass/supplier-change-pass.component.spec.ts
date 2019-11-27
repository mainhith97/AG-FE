import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierChangePassComponent } from './supplier-change-pass.component';

describe('SupplierChangePassComponent', () => {
  let component: SupplierChangePassComponent;
  let fixture: ComponentFixture<SupplierChangePassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierChangePassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierChangePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
