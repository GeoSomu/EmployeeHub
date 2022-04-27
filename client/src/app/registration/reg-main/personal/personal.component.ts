import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistartionService } from 'src/app/shared/services/registartion.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  public titles: any[] = [];
  password: string = ''
  public personalInformation: any;
  public submitted = false;

  gender: any = ''

  constructor(private router: Router, private registrationService: RegistartionService) { }

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
