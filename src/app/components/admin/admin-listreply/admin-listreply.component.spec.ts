import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListreplyComponent } from './admin-listreply.component';

describe('AdminListreplyComponent', () => {
  let component: AdminListreplyComponent;
  let fixture: ComponentFixture<AdminListreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
