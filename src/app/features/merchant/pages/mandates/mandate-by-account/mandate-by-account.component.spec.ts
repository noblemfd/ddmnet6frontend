import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateByAccountComponent } from './mandate-by-account.component';

describe('MandateByAccountComponent', () => {
  let component: MandateByAccountComponent;
  let fixture: ComponentFixture<MandateByAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateByAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
