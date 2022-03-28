import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './components/layouts/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/layouts/admin-sidebar/admin-sidebar.component';
import { MerchantSidebarComponent } from './components/layouts/merchant-sidebar/merchant-sidebar.component';
import { MerchantHeaderComponent } from './components/layouts/merchant-header/merchant-header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ForbiddenComponent } from './components/errors/forbidden/forbidden.component';
import { ServerErrorComponent } from './components/errors/server-error/server-error.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { HttpErrorNotificationComponent } from './error-handling/http-errors/components/http-error-notification/http-error-notification.component';
import { ConfirmationDialogComponent } from './notifications/services/confirmation-dialog/confirmation-dialog.component';
import { ShowValidationErrorsComponent } from './error-handling/form-validation/components/show-validation-errors/show-validation-errors.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    MerchantSidebarComponent,
    MerchantHeaderComponent,
    FooterComponent,
    ForbiddenComponent,
    ServerErrorComponent,
    PageNotFoundComponent,
    HttpErrorNotificationComponent,
    ConfirmationDialogComponent,
    ShowValidationErrorsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
