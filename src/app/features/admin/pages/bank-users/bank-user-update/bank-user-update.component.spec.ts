import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUserUpdateComponent } from './bank-user-update.component';

describe('BankUserUpdateComponent', () => {
  let component: BankUserUpdateComponent;
  let fixture: ComponentFixture<BankUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
