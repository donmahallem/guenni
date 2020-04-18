import { TestBed } from '@angular/core/testing';

import { RouteUserService } from './route-user.service';

describe('RouteUserService', () => {
  let service: RouteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
