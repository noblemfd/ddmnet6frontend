import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateDetailsComponent } from './mandate-details.component';

describe('MandateDetailsComponent', () => {
  let component: MandateDetailsComponent;
  let fixture: ComponentFixture<MandateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
