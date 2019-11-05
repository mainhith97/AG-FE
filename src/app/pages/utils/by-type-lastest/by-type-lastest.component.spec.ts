import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypeLastestComponent } from './by-type-lastest.component';

describe('ByTypeLastestComponent', () => {
  let component: ByTypeLastestComponent;
  let fixture: ComponentFixture<ByTypeLastestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTypeLastestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTypeLastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
