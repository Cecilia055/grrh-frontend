import { TestBed } from '@angular/core/testing';

import { DetallePlanillaService } from './detalle-planilla.service';

describe('DetallePlanillaService', () => {
  let service: DetallePlanillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePlanillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
