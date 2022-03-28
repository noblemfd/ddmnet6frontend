import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUserCreateComponent } from './bank-user-create.component';

describe('BankUserCreateComponent', () => {
  let component: BankUserCreateComponent;
  let fixture: ComponentFixture<BankUserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankUserCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
