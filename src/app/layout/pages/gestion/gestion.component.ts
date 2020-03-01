import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Post } from '../../entities/post.entity';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  providers:[CrudService]
})
export class GestionComponent implements OnInit {
idUser:any;
post:Post = new Post();
  constructor(private route:Router, private currentRoute:ActivatedRoute, private crud:CrudService) { 
    this.currentRoute.params.subscribe(res=>{
      this.idUser = res.id;
    })
  }

  ngOnInit(): void {
    this.crud.getUserById(this.idUser).subscribe(res=>{
      console.log(res);
      this.post = <Post>res;
    })
  }
  edit(){
    this.crud.updateUserById(this.idUser,this.post).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/'])
    })
  }

}
