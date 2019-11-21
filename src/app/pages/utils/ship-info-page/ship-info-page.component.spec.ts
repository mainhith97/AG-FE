import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipInfoPageComponent } from './ship-info-page.component';

describe('ShipInfoPageComponent', () => {
  let component: ShipInfoPageComponent;
  let fixture: ComponentFixture<ShipInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
