import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListDistributorComponent } from './admin-list-distributor.component';

describe('AdminListDistributorComponent', () => {
  let component: AdminListDistributorComponent;
  let fixture: ComponentFixture<AdminListDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
