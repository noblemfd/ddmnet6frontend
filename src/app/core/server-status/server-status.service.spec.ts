/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServerStatusService } from './server-status.service';

describe('Service: ServerStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerStatusService]
    });
  });

  it('should ...', inject([ServerStatusService], (service: ServerStatusService) => {
    expect(service).toBeTruthy();
  }));
});
