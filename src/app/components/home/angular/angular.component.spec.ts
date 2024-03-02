import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularComponent } from "./angular.component";

describe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

