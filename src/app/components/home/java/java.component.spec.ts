import { ComponentFixture, TestBed } from "@angular/core/testing";
import { JavaComponent } from "./java.component";

describe('JavaComponent', () => {
  let component: JavaComponent;
  let fixture: ComponentFixture<JavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(JavaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


