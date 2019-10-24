import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateproductComponent } from './admin-createproduct.component';

describe('AdminCreateproductComponent', () => {
  let component: AdminCreateproductComponent;
  let fixture: ComponentFixture<AdminCreateproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
