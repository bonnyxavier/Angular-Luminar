import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""

  accountDetails: any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
  }

  constructor() {
    this.getDetails();
   }
   

  saveDetails(){
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails));
    
    if(this.currentUser){
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }

  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails=JSON.parse(localStorage.getItem("accountDetails") || '')
    }
    if(localStorage.getItem("currentUser") ){
    this.currentUser= JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }

  register(uname:any, acno:any, pswd:any) {
    let user = this.accountDetails;

    if (acno in user) {
      return false;
    }

    else {
      user[acno] = {
        acno,
        username: uname,
        password: pswd,
        balance: 0
      }
      this.saveDetails();
      return true;

    }
  }

  login(acno:any, pswd:any){

    let users = this.accountDetails;
    if (acno in users) {
      if(pswd == users[acno].password){
          this.currentUser = users[acno]["username"]
          this.saveDetails();
          return true;
      }
      else {
          return false;
      }
  }

  else {
      return false;
  }

  }


  deposit(acno:any, pswd:any, amt:any){
    var amount = parseInt(amt);
    let user = this.accountDetails;
    if(acno in user){
      if(pswd == user[acno]["password"]){
        user[acno]["balance"]+=amount;
        this.saveDetails();
        return user[acno]["balance"];
      }
      else{
        alert("Incorrect Password")
      }
    }

  }


  withdraw(acno:any, pswd:any, amt:any){
    var amount = parseInt(amt);
    let user = this.accountDetails;
    if(acno in user){
      if(pswd == user[acno]["password"]){
        if(amount < user[acno]["balance"]){
        user[acno]["balance"]-=amount;
        this.saveDetails();
        return user[acno]["balance"];
        }
      else{
        alert("insufficient funds")
      }
      }
      else{
        alert("Incorrect Password")
      }
    }

  }
}
