import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanTwoComponent } from './supersaiyan-two.component';

describe('SupersaiyanTwoComponent', () => {
  let component: SupersaiyanTwoComponent;
  let fixture: ComponentFixture<SupersaiyanTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
