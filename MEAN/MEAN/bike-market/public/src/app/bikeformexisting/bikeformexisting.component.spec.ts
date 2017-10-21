import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeformexistingComponent } from './bikeformexisting.component';

describe('BikeformexistingComponent', () => {
  let component: BikeformexistingComponent;
  let fixture: ComponentFixture<BikeformexistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeformexistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeformexistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
