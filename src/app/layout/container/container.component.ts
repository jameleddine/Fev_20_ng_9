import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  count:number = 0;
  username:string;
  name:string;
  email:string;
  phone:number;
  about:string;
  users:any = [];
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 keyname:string;
 
  constructor() {
    console.log("constructor call")
   }
   ngAfterContentInit(){
    console.log("ngAfterContentInit call")
   }

  ngOnInit(): void {
    console.log("ngOnInit call")
  }
  
  decrement(){
    this.count --;
  }
  increment(){
    this.count ++;
  }
  fn(){
    alert(this.username);
  }
  save(){
    let data ={
      Name : this.name,
      Email:this.email,
      Phone:this.phone,
      About:this.about
    }
    this.users.push(data);
    console.log(data)
  }

}
