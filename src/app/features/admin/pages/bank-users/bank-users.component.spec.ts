import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUsersComponent } from './bank-users.component';

describe('BankUsersComponent', () => {
  let component: BankUsersComponent;
  let fixture: ComponentFixture<BankUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
