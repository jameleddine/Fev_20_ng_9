import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post } from '../../entities/post.entity';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
  providers :[CrudService]
})
export class AjoutComponent implements OnInit {
// title:string;
// description:string;
// contract_type:string;
// salaire:string;
post: Post = new Post();
  constructor(private crud:CrudService,private route:Router) { }

  ngOnInit(): void {
  }
  save(){
    // let post = {
    //   title:this.title,
    //   description: this.description,
    //   contract_type:this.contract_type,
    //   salaire:this.salaire
    // }
    this.crud.createNewUser(this.post).subscribe(
      res=>{
        console.log(res);
        this.route.navigate(['/'])
      }
    )
  }

}
