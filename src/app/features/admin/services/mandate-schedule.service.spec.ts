import { TestBed } from '@angular/core/testing';

import { MandateScheduleService } from './mandate-schedule.service';

describe('MandateScheduleService', () => {
  let service: MandateScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandateScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
