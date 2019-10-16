import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerListhistoryComponent } from './farmer-listhistory.component';

describe('FarmerListhistoryComponent', () => {
  let component: FarmerListhistoryComponent;
  let fixture: ComponentFixture<FarmerListhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerListhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerListhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
