import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierChangePassPageComponent } from './supplier-change-pass-page.component';

describe('SupplierChangePassPageComponent', () => {
  let component: SupplierChangePassPageComponent;
  let fixture: ComponentFixture<SupplierChangePassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierChangePassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierChangePassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
