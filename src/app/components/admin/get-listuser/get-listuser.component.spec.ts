import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListuserComponent } from './get-listuser.component';

describe('GetListuserComponent', () => {
  let component: GetListuserComponent;
  let fixture: ComponentFixture<GetListuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetListuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetListuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
