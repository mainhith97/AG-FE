import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListdistributorComponent } from './admin-listdistributor.component';

describe('AdminListdistributorComponent', () => {
  let component: AdminListdistributorComponent;
  let fixture: ComponentFixture<AdminListdistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListdistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListdistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
