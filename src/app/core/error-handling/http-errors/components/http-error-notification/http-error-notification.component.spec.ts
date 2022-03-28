import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorNotificationComponent } from './http-error-notification.component';

describe('HttpErrorNotificationComponent', () => {
  let component: HttpErrorNotificationComponent;
  let fixture: ComponentFixture<HttpErrorNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpErrorNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpErrorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
