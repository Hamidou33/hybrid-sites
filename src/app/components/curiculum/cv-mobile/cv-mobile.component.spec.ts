import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CvMobileComponent } from "./cv-mobile.component";
import { CuriculumService } from "../service/curiculum/curiculum.service";
import { HttpClient } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";

describe('CvMobileComponent', () => {
  let component: CvMobileComponent;
  let fixture: ComponentFixture<CvMobileComponent>;
  let curiculumService: CuriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CvMobileComponent, TranslateModule.forRoot(), RouterTestingModule],
      providers: [CuriculumService, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CvMobileComponent);
    component = fixture.componentInstance;
    curiculumService = TestBed.inject(CuriculumService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

