import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  previousPage(){
    this.router.navigate(['/registration/organization'])
  }

  nextPage(){
    this.router.navigate(['/registration/confirmation'])
  }

}
