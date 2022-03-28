import { TestBed } from '@angular/core/testing';

import { LoggedInCanActivateService } from './logged-in-can-activate.service';

describe('LoggedInCanActivateService', () => {
  let service: LoggedInCanActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInCanActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
