import { TestBed, inject } from '@angular/core/testing';

import { OrphanService } from './orphan.service';

describe('OrphanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrphanService]
    });
  });

  it('should be created', inject([OrphanService], (service: OrphanService) => {
    expect(service).toBeTruthy();
  }));
});
