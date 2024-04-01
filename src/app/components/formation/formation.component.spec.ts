import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormationComponent } from "./formation.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";

describe('FormationComponent', () => {
  let component: FormationComponent;
  let fixture: ComponentFixture<FormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormationComponent, RouterTestingModule, TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

