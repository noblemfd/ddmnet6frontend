import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MerchantDashboardComponent } from './pages/merchant-dashboard/merchant-dashboard.component';
import { MerchantUsersComponent } from './pages/merchant-users/merchant-users.component';
import { MerchantUserCreateComponent } from './pages/merchant-users/merchant-user-create/merchant-user-create.component';
import { MerchantUserDetailComponent } from './pages/merchant-users/merchant-user-detail/merchant-user-detail.component';
import { MerchantUserUpdateComponent } from './pages/merchant-users/merchant-user-update/merchant-user-update.component';
import { MandatesComponent } from './pages/mandates/mandates.component';
import { MandateCreateComponent } from './pages/mandates/mandate-create/mandate-create.component';
import { MandateUpdateComponent } from './pages/mandates/mandate-update/mandate-update.component';
import { MandateDetailComponent } from './pages/mandates/mandate-detail/mandate-detail.component';
import { MandateSchedulesComponent } from './pages/mandate-schedules/mandate-schedules.component';
import { MandateScheduleDetailComponent } from './pages/mandate-schedules/mandate-schedule-detail/mandate-schedule-detail.component';
import { MandateWithScheduleDetailComponent } from './pages/mandate-with-schedules/mandate-with-schedule-detail/mandate-with-schedule-detail.component';
import { MandateWithSchedulesComponent } from './pages/mandate-with-schedules/mandate-with-schedules.component';
import { ProfileUpdateComponent } from './pages/profile/profile-update/profile-update.component';
import { CompletedPaymentsComponent } from './pages/mandates/completed-payments/completed-payments.component';
import { MandateByAccountComponent } from './pages/mandates/mandate-by-account/mandate-by-account.component';
import { MandateByCustomerComponent } from './pages/mandates/mandate-by-customer/mandate-by-customer.component';

@NgModule({
  declarations: [

    MerchantComponent,
       ProfileComponent,
       MerchantDashboardComponent,
       MerchantUsersComponent,
       MerchantUserCreateComponent,
       MerchantUserDetailComponent,
       MerchantUserUpdateComponent,
       MandatesComponent,
       MandateCreateComponent,
       MandateUpdateComponent,
       MandateDetailComponent,
       MandateSchedulesComponent,
       MandateScheduleDetailComponent,
       MandateWithScheduleDetailComponent,
       MandateWithSchedulesComponent,
       ProfileUpdateComponent,
       CompletedPaymentsComponent,
       MandateByAccountComponent,
       MandateByCustomerComponent
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule
  ]
})
export class MerchantModule { }
