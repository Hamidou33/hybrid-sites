import {TestBed} from '@angular/core/testing';
import {CuriculumService} from './curiculum.service';
import {CvBase64Service} from './cv-base64.service';
import {HttpClient} from "@angular/common/http";

describe('CuriculumService', () => {
  let service: CuriculumService;
  let cvService: CvBase64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuriculumService, CvBase64Service, HttpClient]
    });
    service = TestBed.inject(CuriculumService);
    cvService = TestBed.inject(CvBase64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should download the PDF', () => {
    // Spy on the CvBase64Service's CV_FRONT property to return the test value "test"
    spyOn(cvService, 'CV_FRONT').and.returnValue('test');

    // Create a spy for document.createElement to return a mock anchor element
    const anchorElement = document.createElement('a');
    spyOn(document, 'createElement').and.returnValue(anchorElement);

    // Create a spy for anchorElement.click() method
    const clickSpy = spyOn(anchorElement, 'click');

    // Call the downloadPdf method
    service.downloadPdf();

    // Expectations
    expect(cvService.CV_FRONT).toBe('test');
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(anchorElement.href).toBe('data:application/pdf;base64,test');
    expect(anchorElement.download).toBe('cv.pdf');
    expect(clickSpy).toHaveBeenCalled();
  });
});
