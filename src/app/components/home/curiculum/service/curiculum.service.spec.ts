import { TestBed } from '@angular/core/testing';

import { CuriculumService } from './curiculum.service';

describe('CuriculumService', () => {
  let service: CuriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
