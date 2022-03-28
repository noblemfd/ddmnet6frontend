import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateWithScheduleDetailComponent } from './mandate-with-schedule-detail.component';

describe('MandateWithScheduleDetailComponent', () => {
  let component: MandateWithScheduleDetailComponent;
  let fixture: ComponentFixture<MandateWithScheduleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateWithScheduleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateWithScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
