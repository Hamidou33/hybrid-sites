import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriculumComponent } from './curiculum.component';

describe('CuriculumComponent', () => {
  let component: CuriculumComponent;
  let fixture: ComponentFixture<CuriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuriculumComponent]
    });
    fixture = TestBed.createComponent(CuriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
