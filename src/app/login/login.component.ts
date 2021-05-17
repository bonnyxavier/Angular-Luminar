import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    stringInterpolation="Welcome To YES Bank"
    accno="Enter Account Number Here"
    pswd=""


    accountDetails:any = {
      1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
      1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
      1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
      1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  accnoChange(event:any){
    this.accno=event.target.value;
    console.log(this.accno)
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd)
  }


  login(){
    var acno= this.accno;
    var pswd= this.pswd;
    var users = this.accountDetails;
    if (acno in users) {
      if(pswd == users[acno].password){
          alert("Login Successful")
          this.router.navigateByUrl("dashboard")
          return 1;
      }
      else {
          alert("Incorrect Password")
          return 0;
      }
  }

  else {
      alert("Incorrect Account")
      return -1;
  }

  }


  register(){
    this.router.navigateByUrl("register")
  }
}
