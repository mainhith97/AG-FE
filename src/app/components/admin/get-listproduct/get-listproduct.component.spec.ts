import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListproductComponent } from './get-listproduct.component';

describe('GetListproductComponent', () => {
  let component: GetListproductComponent;
  let fixture: ComponentFixture<GetListproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetListproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetListproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
