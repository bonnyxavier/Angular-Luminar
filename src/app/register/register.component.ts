import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username="";
  accno="";
  pswd="";

  constructor(private dataService:DataService, private router:Router) { }

  
  ngOnInit(): void {
  }

register(){

  var uname = this.username;
  var acno = this.accno;
  var pswd = this.pswd;

  const result = this.dataService.register(uname,acno,pswd)

  if(result){
    alert("Succesffuly Registered!");
    this.router.navigateByUrl("");
  }

  else{
    alert("User Exists...Please Login")
  }




}


}
