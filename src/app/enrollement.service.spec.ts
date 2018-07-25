import { TestBed, inject } from '@angular/core/testing';

import { EnrollementService } from './enrollement.service';

describe('EnrollementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrollementService]
    });
  });

  it('should be created', inject([EnrollementService], (service: EnrollementService) => {
    expect(service).toBeTruthy();
  }));
});
