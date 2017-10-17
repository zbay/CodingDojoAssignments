import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserboxComponent } from './userbox.component';

describe('UserboxComponent', () => {
  let component: UserboxComponent;
  let fixture: ComponentFixture<UserboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
