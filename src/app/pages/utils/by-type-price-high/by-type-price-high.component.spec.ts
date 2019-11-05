import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypePriceHighComponent } from './by-type-price-high.component';

describe('ByTypePriceHighComponent', () => {
  let component: ByTypePriceHighComponent;
  let fixture: ComponentFixture<ByTypePriceHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTypePriceHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTypePriceHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
