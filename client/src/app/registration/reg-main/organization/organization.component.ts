import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public previousPage(){
    this.router.navigate(['/registration/address'])
  }

  public nextPage(){
    this.router.navigate(['/registration/upload-image'])
  }

}
