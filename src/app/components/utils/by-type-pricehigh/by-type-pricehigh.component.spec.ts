import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypePricehighComponent } from './by-type-pricehigh.component';

describe('ByTypePricehighComponent', () => {
  let component: ByTypePricehighComponent;
  let fixture: ComponentFixture<ByTypePricehighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTypePricehighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTypePricehighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
