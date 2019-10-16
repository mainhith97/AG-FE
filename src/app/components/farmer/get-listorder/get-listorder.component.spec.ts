import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListorderComponent } from './get-listorder.component';

describe('GetListorderComponent', () => {
  let component: GetListorderComponent;
  let fixture: ComponentFixture<GetListorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetListorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetListorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
