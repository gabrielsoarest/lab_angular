
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3001/user'
 
  constructor( private http:HttpClient) { }

  recoverUser(id:string):Observable<User>{
    
    const url = `${this.baseUrl}/${id}`
    
    return this.http.get<User>(url)
    
    //return null;
  }
}
