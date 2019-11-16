import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchuserComponent } from './admin-searchuser.component';

describe('AdminSearchuserComponent', () => {
  let component: AdminSearchuserComponent;
  let fixture: ComponentFixture<AdminSearchuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
