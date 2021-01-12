import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminServicesComponent } from './admin-services.component';

describe('AdminServicesComponent', () => {
  let component: AdminServicesComponent;
  let fixture: ComponentFixture<AdminServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
