import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksSliderComponent } from './frameworks-slider.component';

describe('FrameworksSliderComponent', () => {
  let component: FrameworksSliderComponent;
  let fixture: ComponentFixture<FrameworksSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworksSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
