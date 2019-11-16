import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyFeedbackComponent } from './reply-feedback.component';

describe('ReplyFeedbackComponent', () => {
  let component: ReplyFeedbackComponent;
  let fixture: ComponentFixture<ReplyFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
