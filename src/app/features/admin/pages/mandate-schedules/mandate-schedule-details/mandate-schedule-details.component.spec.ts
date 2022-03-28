import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateScheduleDetailsComponent } from './mandate-schedule-details.component';

describe('MandateScheduleDetailsComponent', () => {
  let component: MandateScheduleDetailsComponent;
  let fixture: ComponentFixture<MandateScheduleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateScheduleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateScheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
