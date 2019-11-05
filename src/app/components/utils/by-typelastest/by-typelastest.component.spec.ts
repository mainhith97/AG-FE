import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypelastestComponent } from './by-typelastest.component';

describe('ByTypelastestComponent', () => {
  let component: ByTypelastestComponent;
  let fixture: ComponentFixture<ByTypelastestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTypelastestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTypelastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
