import { TestBed } from '@angular/core/testing';

import { AguinaldoService } from './aguinaldo.service';

describe('AguinaldoService', () => {
  let service: AguinaldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AguinaldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
