import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegMainComponent } from './reg-main/reg-main.component';
import { PersonalComponent } from './reg-main/personal/personal.component';
import { AddressComponent } from './reg-main/address/address.component';
import { OrganizationComponent } from './reg-main/organization/organization.component';
import { UploadImageComponent } from './reg-main/upload-image/upload-image.component';
import { ConfirmationComponent } from './reg-main/confirmation/confirmation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegMainComponent,
    PersonalComponent,
    AddressComponent,
    OrganizationComponent,
    UploadImageComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule
  ]
})
export class RegistrationModule { }
