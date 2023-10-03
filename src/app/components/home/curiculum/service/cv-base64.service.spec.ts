import {TestBed} from '@angular/core/testing';

import {CvBase64Service} from './cv-base64.service';

describe('CvBase64Service', () => {
  let service: CvBase64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvBase64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
