/*!
 * Source https://github.com/donmahallem/guenni Package: client-ng
 */

import { TestBed } from '@angular/core/testing';

import { RouteUserService } from './route-user.service';

describe('RouteUserService', (): void => {
  let service: RouteUserService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteUserService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
