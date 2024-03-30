import { TestBed } from "@angular/core/testing";
import { CuriculumService } from "./curiculum.service";
import { CvBase64Service } from "../cv-base64/cv-base64.service";
import { HttpClient } from "@angular/common/http";

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
});
