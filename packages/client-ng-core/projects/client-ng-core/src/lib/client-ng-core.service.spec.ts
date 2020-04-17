import { TestBed } from '@angular/core/testing';

import { ClientNgCoreService } from './client-ng-core.service';

describe('ClientNgCoreService', () => {
  let service: ClientNgCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientNgCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
