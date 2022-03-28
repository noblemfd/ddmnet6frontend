import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateUpdateComponent } from './mandate-update.component';

describe('MandateUpdateComponent', () => {
  let component: MandateUpdateComponent;
  let fixture: ComponentFixture<MandateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
