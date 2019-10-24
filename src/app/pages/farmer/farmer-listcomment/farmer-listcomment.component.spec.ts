import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerListcommentComponent } from './farmer-listcomment.component';

describe('FarmerListcommentComponent', () => {
  let component: FarmerListcommentComponent;
  let fixture: ComponentFixture<FarmerListcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerListcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerListcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
