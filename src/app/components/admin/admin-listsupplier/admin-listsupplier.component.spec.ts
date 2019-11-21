import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListsupplierComponent } from './admin-listsupplier.component';

describe('AdminListsupplierComponent', () => {
  let component: AdminListsupplierComponent;
  let fixture: ComponentFixture<AdminListsupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListsupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
