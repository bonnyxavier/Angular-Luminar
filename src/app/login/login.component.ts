import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stringInterpolation = "Welcome To YES Bank"

  loginForm = this.fb.group({
    accno: ["", [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })



  constructor(private router: Router, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  login() {

    if (this.loginForm.valid){
      alert("Form Valid")
      var acno = this.loginForm.value.accno;
      var pswd = this.loginForm.value.pswd;
      console.log(acno)
      console.log(pswd)

      const result = this.dataService.login(acno, pswd)

      if (result){
        alert("Login Successful!");
        this.router.navigateByUrl("dashboard");
      }

      else {
        alert("Incorrect Data")
      }
    }
    else {
      alert("invalid form")
    }

  }


  register() {
    this.router.navigateByUrl("register")
  }

}