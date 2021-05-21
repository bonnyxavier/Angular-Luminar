import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ["", [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accno: ["", [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  register() {


    console.log(this.registerForm.get('username')?.errors)
    if(this.registerForm.get('username')?.errors){
      alert("invalid username")
    }

    if (this.registerForm.valid) {
      alert("Form Valid")

      var uname = this.registerForm.value.username;
      var acno = this.registerForm.value.accno;
      var pswd = this.registerForm.value.pswd;

      const result = this.dataService.register(uname, acno, pswd)

      if (result) {
        alert("Succesffuly Registered!");
        this.router.navigateByUrl("");
      }

      else {
        alert("User Exists...Please Login")
      }

    }
    else {
      alert("Invalid Form")
    }


  }


}
