import { TestBed, inject } from '@angular/core/testing';

import { CalculatorServiceService } from './calculator-service.service';

describe('CalculatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorServiceService]
    });
  });

  it('should be created', inject([CalculatorServiceService], (service: CalculatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
