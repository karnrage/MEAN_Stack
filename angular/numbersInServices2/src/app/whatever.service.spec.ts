import { TestBed, inject } from '@angular/core/testing';

import { WhateverService } from './whatever.service';

describe('WhateverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhateverService]
    });
  });

  it('should be created', inject([WhateverService], (service: WhateverService) => {
    expect(service).toBeTruthy();
  }));
});
