import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateWithSchedulesComponent } from './mandate-with-schedules.component';

describe('MandateWithSchedulesComponent', () => {
  let component: MandateWithSchedulesComponent;
  let fixture: ComponentFixture<MandateWithSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateWithSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateWithSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
