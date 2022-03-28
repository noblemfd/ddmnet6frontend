import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantWithUsersComponent } from './merchant-with-users.component';

describe('MerchantWithUsersComponent', () => {
  let component: MerchantWithUsersComponent;
  let fixture: ComponentFixture<MerchantWithUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantWithUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantWithUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
