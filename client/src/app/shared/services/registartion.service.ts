import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistartionService {

  public employeeInformation = {
    personalInformation: {
      'title': '',
      'firstName': '',
      'lastName': '',
      'personalEmail': '',
      'dateOfBirth': null,
      'gender': '',
      'age': null,
      'password': '',
      'confirmPassword': '',
      'saveDetail': false
    },
    address: {
      'dNo': '',
      'streetName': '',
      'addresslineTwo': '',
      'city': '',
      'state': '',
      'country': '',
      'zipCode': null,
      'saveDetail': false
    },
    organization: {
      'empId': '',
      'designation': '',
      'organizationName': '',
      'primarySkills': [],
      'saveDetail': false
    },
    uploadImage: {
      'empImage': '',
      'saveDetail': false
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
