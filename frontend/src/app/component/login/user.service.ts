import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3001/user'
 
  constructor( private http:HttpClient) { }

  recoverUser(id:string):Observable<Usuario>{
    
    const url = `${this.baseUrl}/${id}`
    
    return this.http.get<Usuario>(url)
    
    //return null;
  }
}
