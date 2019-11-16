import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEdittypeComponent } from './admin-edittype.component';

describe('AdminEdittypeComponent', () => {
  let component: AdminEdittypeComponent;
  let fixture: ComponentFixture<AdminEdittypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEdittypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEdittypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
