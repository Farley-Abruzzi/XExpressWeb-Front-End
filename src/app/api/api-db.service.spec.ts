import { TestBed } from '@angular/core/testing';

import { ApiDbService } from './api-db.service';

describe('ApiDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiDbService = TestBed.get(ApiDbService);
    expect(service).toBeTruthy();
  });
});
