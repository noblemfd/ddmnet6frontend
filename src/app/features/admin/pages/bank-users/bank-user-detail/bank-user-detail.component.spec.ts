import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUserDetailComponent } from './bank-user-detail.component';

describe('BankUserDetailComponent', () => {
  let component: BankUserDetailComponent;
  let fixture: ComponentFixture<BankUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
