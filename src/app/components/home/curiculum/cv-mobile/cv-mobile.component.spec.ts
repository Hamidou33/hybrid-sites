import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvMobileComponent } from './cv-mobile.component';
import { CuriculumService } from '../service/curiculum.service';
import {HttpClient, provideHttpClient} from "@angular/common/http";

describe('CvMobileComponent', () => {
  let component: CvMobileComponent;
  let fixture: ComponentFixture<CvMobileComponent>;
  let curiculumService: CuriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvMobileComponent],
      providers: [CuriculumService, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CvMobileComponent);
    component = fixture.componentInstance;
    curiculumService = TestBed.inject(CuriculumService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadPdf method of CuriculumService on downloadPdfMobile()', () => {
    const downloadPdfSpy = jest.spyOn(curiculumService, 'downloadPdf');
    component.downloadPdfMobile();
    expect(downloadPdfSpy).toHaveBeenCalled();
  });
});

