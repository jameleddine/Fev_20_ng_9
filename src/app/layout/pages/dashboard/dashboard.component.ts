import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
posts:any=[];
loading:boolean=false;
titleSearch:string;
descriptionSearch:string;
contractSearch:string;
  constructor(private crud:CrudService, private route:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.loading = true;
    this.crud.getAll().subscribe(
      res=>{
        this.loading = false;
        this.posts = res
        localStorage.setItem('posts',JSON.stringify(res))
      }
    )

    // this.http.get('http://localhost:3000/posts').subscribe(
    //   res=>{
    //     this.loading = false;
    //     this.posts = res
    //     localStorage.setItem('posts',JSON.stringify(res))
    //   }
    // )
  }
  delete(post){
    this.loading = true;
    this.crud.deleteUserById(post._id).subscribe(
      res=>{
        console.log(res);
        this.getAll();
      },
      err=>{

      },
      ()=>{
        this.loading = false;
      }
    )
  }
  edit(post){
    this.route.navigate(['/gestion',post._id]);
  };

}
