import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWindowComponent } from './slider-window.component';

describe('SliderWindowComponent', () => {
  let component: SliderWindowComponent;
  let fixture: ComponentFixture<SliderWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
