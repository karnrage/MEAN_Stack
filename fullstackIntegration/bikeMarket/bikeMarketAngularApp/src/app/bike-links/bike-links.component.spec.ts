import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeLinksComponent } from './bike-links.component';

describe('BikeLinksComponent', () => {
  let component: BikeLinksComponent;
  let fixture: ComponentFixture<BikeLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
