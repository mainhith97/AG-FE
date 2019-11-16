import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerListreplyComponent } from './farmer-listreply.component';

describe('FarmerListreplyComponent', () => {
  let component: FarmerListreplyComponent;
  let fixture: ComponentFixture<FarmerListreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerListreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerListreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
