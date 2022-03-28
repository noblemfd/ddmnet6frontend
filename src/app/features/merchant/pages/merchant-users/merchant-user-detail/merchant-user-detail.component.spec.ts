import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantUserDetailComponent } from './merchant-user-detail.component';

describe('MerchantUserDetailComponent', () => {
  let component: MerchantUserDetailComponent;
  let fixture: ComponentFixture<MerchantUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
