import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListorderComponent } from './admin-listorder.component';

describe('AdminListorderComponent', () => {
  let component: AdminListorderComponent;
  let fixture: ComponentFixture<AdminListorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
