import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpService } from 'src/app/shared/services/http.service';
import { RegistartionService } from 'src/app/shared/services/registartion.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  public data: any;
  public uploadedImg: string = '';

  constructor(
    private router: Router,
    private registrationService: RegistartionService,
    private httpService: HttpService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.data = this.registrationService.getEmployeeInformation();
    this.uploadedImg = this.data.uploadImage.empImage[0]?.objectURL;
  }

  previousPage(){
    this.router.navigate(['/registration/upload-image'])
  }

  onSubmit(){
    const reqData = {
      "personalInformation": {
        "title": this.data?.personalInformation?.title?.titleName,
        "firstName": this.data?.personalInformation?.firstName,
        "lastName": this.data?.personalInformation?.lastName,
        "personalEmail": this.data?.personalInformation?.personalEmail,
        "dateOfBirth": this.data?.personalInformation?.dateOfBirth,
        "gender": this.data?.personalInformation?.gender,
        "phoneNumber": this.data?.personalInformation?.phoneNumber,
        "password": this.data?.personalInformation?.password
    },
    "address": {
        "dNo": this.data?.address?.dNo,
        "streetName": this.data?.address?.streetName,
        "addresslineTwo": this.data?.personalInformation?.addresslineTwo,
        "country": this.data?.address?.country?.name,
        "state": this.data?.address?.state?.name,
        "city": this.data?.address?.city?.name,
        "zipCode": this.data?.address?.zipCode
    },
    "organization": {
        "empId": this.data?.organization?.empId,
        "designation": this.data?.organization?.designation,
        "organizationName": this.data?.organization?.organizationName,
        "primarySkills": this.data?.organization?.primarySkills
    },
    "uploadImage": {
        "empImg": this.data?.uploadImage?.empImage
    },
    "registeredDate": new Date(),
    "isVerifiedEmail": false
    };

    const actionUrl = "saveEmployeeData";
    this.httpService.postNewData(actionUrl, reqData).subscribe(res => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Data Saved Successfully'
      });
    }, err => {
      console.log("err : ", err);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: err.message
      })
    })
  }
}
