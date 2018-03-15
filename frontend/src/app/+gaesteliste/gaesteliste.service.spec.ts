import { TestBed, inject } from '@angular/core/testing';

import { GaestelisteService } from './gaesteliste.service';

describe('GaestelisteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaestelisteService]
    });
  });

  it('should be created', inject([GaestelisteService], (service: GaestelisteService) => {
    expect(service).toBeTruthy();
  }));
});
