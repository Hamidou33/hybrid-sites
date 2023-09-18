import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormationComponent } from './formation.component';

describe('FormationComponent', () => {
  let component: FormationComponent;
  let fixture: ComponentFixture<FormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

