import { TestBed, inject } from '@angular/core/testing';

import { AaService } from './aa.service';

describe('AaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AaService]
    });
  });

  it('should be created', inject([AaService], (service: AaService) => {
    expect(service).toBeTruthy();
  }));
});
