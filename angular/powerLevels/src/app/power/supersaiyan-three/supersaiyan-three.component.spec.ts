import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanThreeComponent } from './supersaiyan-three.component';

describe('SupersaiyanThreeComponent', () => {
  let component: SupersaiyanThreeComponent;
  let fixture: ComponentFixture<SupersaiyanThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
