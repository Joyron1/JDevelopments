import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeaveInfoComponent } from './leave-info.component';

describe('LeaveInfoComponent', () => {
  let component: LeaveInfoComponent;
  let fixture: ComponentFixture<LeaveInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
