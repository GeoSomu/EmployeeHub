import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistartionService {

  public employeeInformation = {
    personalInformation: {
      'title': {
        'titleName': ''
      },
      'firstName': '',
      'lastName': '',
      'personalEmail': '',
      'dateOfBirth': null,
      'gender': '',
      'phoneNumber': null,
      'password': '',
      'confirmPassword': '',
    },
    address: {
      'dNo': '',
      'streetName': '',
      'addresslineTwo': '',
      'city': '',
      'state': '',
      'country': '',
      'zipCode': null
    },
    organization: {
      'empId': '',
      'designation': '',
      'organizationName': '',
      'primarySkills': []
    },
    uploadImage: {
      'empImage': []
    }
  };

  private informationComplete = new Subject<any>();

  public informationComplete$ = this.informationComplete.asObservable();

  constructor() { }

  public getEmployeeInformation(){
    return this.employeeInformation;
  }

  public setEmployeeInformation(empInformation: any){
    this.employeeInformation = empInformation;
  }

  public complete(){
    this.informationComplete.next(this.employeeInformation.personalInformation);
  }

}
