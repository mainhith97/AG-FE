import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypePricelowComponent } from './by-type-pricelow.component';

describe('ByTypePricelowComponent', () => {
  let component: ByTypePricelowComponent;
  let fixture: ComponentFixture<ByTypePricelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTypePricelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTypePricelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
