import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatetypeComponent } from './admin-createtype.component';

describe('AdminCreatetypeComponent', () => {
  let component: AdminCreatetypeComponent;
  let fixture: ComponentFixture<AdminCreatetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreatetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
