import { TestBed } from "@angular/core/testing";
import { CuriculumService } from "./curiculum.service";
import { CvBase64Service } from "../cv-base64/cv-base64.service";
import { HttpClient } from "@angular/common/http";

describe("CuriculumService", () => {
  let service: CuriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuriculumService, CvBase64Service, HttpClient]
    });
    service = TestBed.inject(CuriculumService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
