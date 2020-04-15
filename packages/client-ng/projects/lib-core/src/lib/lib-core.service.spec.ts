/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { TestBed } from '@angular/core/testing';

import { LibCoreService } from './lib-core.service';

describe('LibCoreService', (): void => {
  let service: LibCoreService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibCoreService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
