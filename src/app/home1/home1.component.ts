import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  titre = "titre from Home 1"
  constructor() { }

  ngOnInit(): void {
  }

  callfn(){
    alert("appel from home 1")
  }

}
