import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageUpdateComponent } from './home-page-update.component';

describe('HomePageUpdateComponent', () => {
  let component: HomePageUpdateComponent;
  let fixture: ComponentFixture<HomePageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
