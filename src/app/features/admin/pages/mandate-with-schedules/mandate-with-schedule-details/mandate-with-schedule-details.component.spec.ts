import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateWithScheduleDetailsComponent } from './mandate-with-schedule-details.component';

describe('MandateWithScheduleDetailsComponent', () => {
  let component: MandateWithScheduleDetailsComponent;
  let fixture: ComponentFixture<MandateWithScheduleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateWithScheduleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateWithScheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
