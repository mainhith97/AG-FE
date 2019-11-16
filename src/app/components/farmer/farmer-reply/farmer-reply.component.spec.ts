import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerReplyComponent } from './farmer-reply.component';

describe('FarmerReplyComponent', () => {
  let component: FarmerReplyComponent;
  let fixture: ComponentFixture<FarmerReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
