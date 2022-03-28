import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargeModePipe } from './pipes/charge-mode.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { MandateStatusPipe } from './pipes/mandate-status.pipe';
import { MandateRequiredPipe } from './pipes/mandate-required.pipe';
import { MandateResponsePipe } from './pipes/mandate-response.pipe';
import { NotificationResponsePipe } from './pipes/notification-response.pipe';
import { NotificationRequiredPipe } from './pipes/notification-required.pipe';
import { NotificationTypePipe } from './pipes/notification-type.pipe';
import { PaymentFrequencyPipe } from './pipes/payment-frequency.pipe';
import { ToBooleanPipe } from './pipes/to-boolean.pipe';
import { ToStatusPipe } from './pipes/to-status.pipe';
import { ToTruePipe } from './pipes/to-true.pipe';
import { ToYesPipe } from './pipes/to-yes.pipe';
import { WhoToChargePipe } from './pipes/who-to-charge.pipe';
import { FormatNumberPipe } from './pipes/format-number.pipe';



@NgModule({
  declarations: [
    ChargeModePipe,
    DurationPipe,
    MandateStatusPipe,
    MandateRequiredPipe,
    MandateResponsePipe,
    NotificationResponsePipe,
    NotificationRequiredPipe,
    NotificationTypePipe,
    PaymentFrequencyPipe,
    ToBooleanPipe,
    ToStatusPipe,
    ToTruePipe,
    ToYesPipe,
    WhoToChargePipe,
    FormatNumberPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
