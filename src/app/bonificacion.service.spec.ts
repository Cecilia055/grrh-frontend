import { TestBed } from '@angular/core/testing';

import { BonificacionService } from './bonificacion.service';

describe('BonificacionService', () => {
  let service: BonificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
