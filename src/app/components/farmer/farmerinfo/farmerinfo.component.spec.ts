import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerinfoComponent } from './farmerinfo.component';

describe('FarmerinfoComponent', () => {
  let component: FarmerinfoComponent;
  let fixture: ComponentFixture<FarmerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
