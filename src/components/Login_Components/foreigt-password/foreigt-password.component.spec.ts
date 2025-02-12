import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeigtPasswordComponent } from './foreigt-password.component';

describe('ForeigtPasswordComponent', () => {
  let component: ForeigtPasswordComponent;
  let fixture: ComponentFixture<ForeigtPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeigtPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeigtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
