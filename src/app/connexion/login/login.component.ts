import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    let user = JSON.parse(localStorage.getItem('user')) || undefined
    console.log(user);
    if((user.email == this.email)&&(user.password == this.password)){
      localStorage.setItem('token',"true");
      this.route.navigate(['../'])
    }
    else{
      alert('user does not exist');
    }

  }
}
