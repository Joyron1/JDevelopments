import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminContactMessageComponent } from './admin-contact-message.component';

describe('AdminContactMessageComponent', () => {
  let component: AdminContactMessageComponent;
  let fixture: ComponentFixture<AdminContactMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContactMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContactMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
