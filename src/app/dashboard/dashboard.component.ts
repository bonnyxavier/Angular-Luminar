import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm = this.fb.group({
    dAccno: ["", [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    dPswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    dAmount:  ["", [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    wAccno: ["", [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    wPswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    wAmount:  ["", [Validators.required, Validators.pattern('[0-9]*')]]
  })


  user= this.dataService.currentUser;

  constructor(private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){

    if(this.depositForm.valid){
      var accno = this.depositForm.value.dAccno;
      var pswd = this.depositForm.value.dPswd;
      var amount = this.depositForm.value.dAmount;

    const result = this.dataService.deposit(accno,pswd,amount)

    if(result){
      alert(`the given ${amount} has been credited and the new balance is ${result}`)
    }

    }
    else{
      alert("invalid entry")
    }
    
  }


  withdraw(){

    if(this.withdrawForm.valid){

      var accno = this.withdrawForm.value.wAccno;
      var pswd = this.withdrawForm.value.wPswd;
      var amount = this.withdrawForm.value.wAmount;

      const result = this.dataService.withdraw(accno,pswd,amount)

      if(result){
      alert(`the given ${amount} has been debited and the new balance is ${result}`)
    }

    }

    else{
      alert("invalid entry")
    }
    
  }

}
