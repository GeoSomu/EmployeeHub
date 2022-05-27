import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistartionService } from 'src/app/shared/services/registartion.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  public uploadedImage: any;
  img : any;

  constructor(private router: Router, private registrationService: RegistartionService) { }

  ngOnInit(): void {
    this.uploadedImage = this.registrationService.getEmployeeInformation().uploadImage;
  }

  public onUpload(event: any){
    this.uploadedImage.empImage = event.files;

  }

  previousPage(){
    this.router.navigate(['/registration/organization'])
  }

  nextPage(){
    this.router.navigate(['/registration/confirmation'])
  }

}
