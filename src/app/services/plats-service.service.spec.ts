import { TestBed } from '@angular/core/testing';

import { PlatsServiceService } from './plats-service.service';

describe('PlatsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatsServiceService = TestBed.get(PlatsServiceService);
    expect(service).toBeTruthy();
  });
});
