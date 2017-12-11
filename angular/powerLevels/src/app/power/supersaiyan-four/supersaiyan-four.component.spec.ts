import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanFourComponent } from './supersaiyan-four.component';

describe('SupersaiyanFourComponent', () => {
  let component: SupersaiyanFourComponent;
  let fixture: ComponentFixture<SupersaiyanFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
