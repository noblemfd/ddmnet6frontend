import { TestBed } from '@angular/core/testing';

import { MandateWithScheduleService } from './mandate-with-schedule.service';

describe('MandateWithScheduleService', () => {
  let service: MandateWithScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandateWithScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
