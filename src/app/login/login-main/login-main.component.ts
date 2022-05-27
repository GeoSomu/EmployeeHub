import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  @ViewChild('loginForm') loginForm !: NgForm;
  public loginImgPath: string = "../../../../assets/images/login-form.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("hi :", this.loginForm.value);
    this.loginForm.reset();
  }

}
