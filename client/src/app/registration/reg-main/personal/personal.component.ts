import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { slider } from 'src/app/shared/common/route-animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistartionService } from 'src/app/shared/services/registartion.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [ slider ]
})
export class PersonalComponent implements OnInit {
  public titles: any[] = [];
  public personalInformation: any;

  constructor(
    private router: Router,
    private registrationService: RegistartionService) { }

  ngOnInit(): void {
    this.titles = [
      { titleName: 'Mr' },
      { titleName: 'Ms' },
      { titleName: 'Mrs' }
    ];

    this.personalInformation = this.registrationService.getEmployeeInformation().personalInformation;
  }

  public nextPage(){
    this.router.navigate(['/registration/address']);
  }
}
