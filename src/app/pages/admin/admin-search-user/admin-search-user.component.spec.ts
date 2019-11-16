import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchUserComponent } from './admin-search-user.component';

describe('AdminSearchUserComponent', () => {
  let component: AdminSearchUserComponent;
  let fixture: ComponentFixture<AdminSearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
