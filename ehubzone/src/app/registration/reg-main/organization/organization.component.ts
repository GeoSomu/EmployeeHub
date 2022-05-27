import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistartionService } from 'src/app/shared/services/registartion.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  public organizationInformation: any;

  constructor(private router: Router, private registrationService: RegistartionService) { }

  ngOnInit(): void {
    this.organizationInformation = this.registrationService.getEmployeeInformation().organization;
  }

  public previousPage(){
    this.router.navigate(['/registration/address'])
  }

  public nextPage(){
    this.router.navigate(['/registration/upload-image'])
  }

}
