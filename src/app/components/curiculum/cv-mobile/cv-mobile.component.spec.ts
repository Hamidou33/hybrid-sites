import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CvMobileComponent } from "./cv-mobile.component";
import { CuriculumService } from "../service/curiculum/curiculum.service";
import { HttpClient } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";

describe("CvMobileComponent", () => {
  let component: CvMobileComponent;
  let fixture: ComponentFixture<CvMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CvMobileComponent, TranslateModule.forRoot(), RouterTestingModule],
      providers: [CuriculumService, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CvMobileComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

