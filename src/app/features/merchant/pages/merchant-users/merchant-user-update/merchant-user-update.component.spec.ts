import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantUserUpdateComponent } from './merchant-user-update.component';

describe('MerchantUserUpdateComponent', () => {
  let component: MerchantUserUpdateComponent;
  let fixture: ComponentFixture<MerchantUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
