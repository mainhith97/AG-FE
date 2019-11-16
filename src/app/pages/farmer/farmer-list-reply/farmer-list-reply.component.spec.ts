import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerListReplyComponent } from './farmer-list-reply.component';

describe('FarmerListReplyComponent', () => {
  let component: FarmerListReplyComponent;
  let fixture: ComponentFixture<FarmerListReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerListReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerListReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
