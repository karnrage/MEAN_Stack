import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeItemsComponent } from './bike-items.component';

describe('BikeItemsComponent', () => {
  let component: BikeItemsComponent;
  let fixture: ComponentFixture<BikeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
