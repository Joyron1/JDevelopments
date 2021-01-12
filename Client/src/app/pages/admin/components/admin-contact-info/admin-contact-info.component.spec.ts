import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminContactInfoComponent } from './admin-contact-info.component';

describe('AdminContactInfoComponent', () => {
  let component: AdminContactInfoComponent;
  let fixture: ComponentFixture<AdminContactInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
