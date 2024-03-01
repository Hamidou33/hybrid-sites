import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CuriculumService} from "../service/curiculum/curiculum.service";
import {CvDeskopComponent} from "./cv-deskop.component";
import {HttpClient} from "@angular/common/http";

describe('CvDeskopComponent', () => {
  let component: CvDeskopComponent;
  let fixture: ComponentFixture<CvDeskopComponent>;
  let curriculumService: CuriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvDeskopComponent],
      providers: [CuriculumService, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CvDeskopComponent);
    component = fixture.componentInstance;
    curriculumService = TestBed.inject(CuriculumService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadPdf method of CurriculumService on downloadPdfDeskop()', () => {
    const downloadPdfSpy = jest.spyOn(curriculumService, 'downloadPdf');
    component.downloadPdfDeskop();
    expect(downloadPdfSpy).toHaveBeenCalled();
  });
});

