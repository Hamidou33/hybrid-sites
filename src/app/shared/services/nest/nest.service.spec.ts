import {TestBed} from '@angular/core/testing';
import { NestService } from './nest.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('NestService', () => {
  let service: NestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
