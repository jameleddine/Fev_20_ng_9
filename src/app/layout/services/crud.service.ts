import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl+'posts');
  }
  createNewUser(user){
    return this.http.post(this.apiUrl+'posts',user);
  }
  getUserById(id){
    return this.http.get(this.apiUrl+'post/'+id);
  }
  updateUserById(id,user){
    return this.http.put(this.apiUrl+'post/'+id,user);
  }
  deleteUserById(id){
    return this.http.delete(this.apiUrl+'post/'+id);
  }
}
