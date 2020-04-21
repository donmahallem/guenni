/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('LibCoreService', (): void => {
  let service: ApiService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
