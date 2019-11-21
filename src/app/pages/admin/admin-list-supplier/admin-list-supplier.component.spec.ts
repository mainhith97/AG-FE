import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListSupplierComponent } from './admin-list-supplier.component';

describe('AdminListSupplierComponent', () => {
  let component: AdminListSupplierComponent;
  let fixture: ComponentFixture<AdminListSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
