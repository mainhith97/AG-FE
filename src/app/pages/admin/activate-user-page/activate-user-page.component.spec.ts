import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateUserPageComponent } from './activate-user-page.component';

describe('ActivateUserPageComponent', () => {
  let component: ActivateUserPageComponent;
  let fixture: ComponentFixture<ActivateUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
