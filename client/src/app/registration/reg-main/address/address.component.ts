import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public previousPage(){
    this.router.navigate(['registration/personal'])
  }

  public nextPage(){
    this.router.navigate(['registration/organization'])
  }

}
