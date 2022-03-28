import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { MandatesComponent } from './pages/mandates/mandates.component';
import { MandateDetailsComponent } from './pages/mandates/mandate-details/mandate-details.component';
import { CompletedPaymentsComponent } from './pages/mandates/completed-payments/completed-payments.component';
import { MandateSchedulesComponent } from './pages/mandate-schedules/mandate-schedules.component';
import { MandateScheduleDetailsComponent } from './pages/mandate-schedules/mandate-schedule-details/mandate-schedule-details.component';
import { MandateWithSchedulesComponent } from './pages/mandate-with-schedules/mandate-with-schedules.component';
import { MandateWithScheduleDetailsComponent } from './pages/mandate-with-schedules/mandate-with-schedule-details/mandate-with-schedule-details.component';
import { ThisYearMandatesComponent } from './pages/mandates/this-year-mandates/this-year-mandates.component';
import { MerchantDetailComponent } from './pages/merchants/merchant-detail/merchant-detail.component';
import { MerchantCreateComponent } from './pages/merchants/merchant-create/merchant-create.component';
import { MerchantUpdateComponent } from './pages/merchants/merchant-update/merchant-update.component';
import { ProfileUpdateComponent } from './pages/profile/profile-update/profile-update.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BankUsersComponent } from './pages/bank-users/bank-users.component';
import { BankUserCreateComponent } from './pages/bank-users/bank-user-create/bank-user-create.component';
import { BankUserUpdateComponent } from './pages/bank-users/bank-user-update/bank-user-update.component';
import { BankUserDetailComponent } from './pages/bank-users/bank-user-detail/bank-user-detail.component';
import { MerchantUserDetailsComponent } from './pages/merchant-with-users/merchant-user-details/merchant-user-details.component';
import { MerchantUsersComponent } from './pages/merchant-users/merchant-users.component';
import { MerchantWithUsersComponent } from './pages/merchant-with-users/merchant-with-users.component';

@NgModule({
  declarations: [

    AdminComponent,
       AdminDashboardComponent,
       MandatesComponent,
       MandateDetailsComponent,
       CompletedPaymentsComponent,
       MandateSchedulesComponent,
       MandateScheduleDetailsComponent,
       MandateWithSchedulesComponent,
       MandateWithScheduleDetailsComponent,
       ThisYearMandatesComponent,
       MerchantDetailComponent,
       MerchantCreateComponent,
       MerchantUpdateComponent,
       ProfileUpdateComponent,
       ProfileComponent,
       BankUsersComponent,
       BankUserCreateComponent,
       BankUserUpdateComponent,
       BankUserDetailComponent,
       MerchantUserDetailsComponent,
       MerchantUsersComponent,
       MerchantWithUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
