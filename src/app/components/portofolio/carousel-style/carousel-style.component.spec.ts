import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselStyleComponent } from './carousel-style.component';

describe('CarouselStyleComponent', () => {
  let component: CarouselStyleComponent;
  let fixture: ComponentFixture<CarouselStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
