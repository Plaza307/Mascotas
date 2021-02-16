import { TestBed } from '@angular/core/testing';

import { Comercios.ServiceService } from './comercios.service.service';

describe('Comercios.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Comercios.ServiceService = TestBed.get(Comercios.ServiceService);
    expect(service).toBeTruthy();
  });
});
