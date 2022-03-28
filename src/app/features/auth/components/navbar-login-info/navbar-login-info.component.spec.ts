import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoginInfoComponent } from './navbar-login-info.component';

describe('NavbarLoginInfoComponent', () => {
  let component: NavbarLoginInfoComponent;
  let fixture: ComponentFixture<NavbarLoginInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLoginInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLoginInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
