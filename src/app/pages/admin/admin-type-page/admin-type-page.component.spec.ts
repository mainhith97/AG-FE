import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypePageComponent } from './admin-type-page.component';

describe('AdminTypePageComponent', () => {
  let component: AdminTypePageComponent;
  let fixture: ComponentFixture<AdminTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
