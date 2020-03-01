import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

myform :FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      nameForm:new FormControl('',Validators.required),
      emailForm:new FormControl('',[Validators.required, Validators.email]),
      passwordForm:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  register(){
    console.log(this.myform.value.nameForm)
    let user = {
      name:this.myform.value.nameForm,
      email:this.myform.value.emailForm,
      password:this.myform.value.passwordForm
    }
    localStorage.setItem('user',JSON.stringify(user));
  }

}
