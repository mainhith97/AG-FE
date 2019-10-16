import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerHistoryComponent } from './farmer-history.component';

describe('FarmerHistoryComponent', () => {
  let component: FarmerHistoryComponent;
  let fixture: ComponentFixture<FarmerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
