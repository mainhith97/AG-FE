import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierpageComponent } from './supplierpage.component';

describe('SupplierpageComponent', () => {
  let component: SupplierpageComponent;
  let fixture: ComponentFixture<SupplierpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
