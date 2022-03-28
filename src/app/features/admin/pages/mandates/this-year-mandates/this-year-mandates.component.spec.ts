import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisYearMandatesComponent } from './this-year-mandates.component';

describe('ThisYearMandatesComponent', () => {
  let component: ThisYearMandatesComponent;
  let fixture: ComponentFixture<ThisYearMandatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisYearMandatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisYearMandatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
