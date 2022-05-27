import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './reg-main/address/address.component';
import { ConfirmationComponent } from './reg-main/confirmation/confirmation.component';
import { OrganizationComponent } from './reg-main/organization/organization.component';
import { PersonalComponent } from './reg-main/personal/personal.component';
import { RegMainComponent } from './reg-main/reg-main.component';
import { UploadImageComponent } from './reg-main/upload-image/upload-image.component';

const routes: Routes = [
  {
    path: '',
    component: RegMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal',
        pathMatch: 'full'
      },
      {
        path: 'personal',
        component: PersonalComponent,
        data: {
          animation: 'isLeft'
        }
      },
      {
        path: 'address',
        component: AddressComponent,
        data: {
          animaton: 'isRight'
        }
      },
      {
        path: 'organization',
        component: OrganizationComponent
      },
      {
        path: 'upload-image',
        component: UploadImageComponent
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
