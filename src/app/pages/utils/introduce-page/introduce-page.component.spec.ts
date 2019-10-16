import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducePageComponent } from './introduce-page.component';

describe('IntroducePageComponent', () => {
  let component: IntroducePageComponent;
  let fixture: ComponentFixture<IntroducePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
