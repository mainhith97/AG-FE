import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListcommentComponent } from './admin-listcomment.component';

describe('AdminListcommentComponent', () => {
  let component: AdminListcommentComponent;
  let fixture: ComponentFixture<AdminListcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
