import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RegistartionService } from 'src/app/shared/services/registartion.service';

@Component({
  selector: 'app-reg-main',
  templateUrl: './reg-main.component.html',
  styleUrls: ['./reg-main.component.scss'],

})
export class RegMainComponent implements OnInit {

  items !: MenuItem[];

  constructor(private registrationService: RegistartionService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal'
      },
      {
        label: 'Address',
        routerLink: 'address'
      },
      {
        label: 'Organization',
        routerLink: 'organization'
      },
      {
        label: 'Upload Image',
        routerLink: 'upload-image'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ]
  }

}
