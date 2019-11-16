import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListReplyComponent } from './admin-list-reply.component';

describe('AdminListReplyComponent', () => {
  let component: AdminListReplyComponent;
  let fixture: ComponentFixture<AdminListReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
