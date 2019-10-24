import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCommentComponent } from './farmer-comment.component';

describe('FarmerCommentComponent', () => {
  let component: FarmerCommentComponent;
  let fixture: ComponentFixture<FarmerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
