import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypePriceLowComponent } from './by-type-price-low.component';

describe('ByTypePriceLowComponent', () => {
  let component: ByTypePriceLowComponent;
  let fixture: ComponentFixture<ByTypePriceLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTypePriceLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTypePriceLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
