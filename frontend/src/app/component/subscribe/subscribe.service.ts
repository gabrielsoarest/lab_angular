import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http:HttpClient) { }

   baseUrl='http://localhost:3001/user'

  subscribeUser(user:User):Observable<User>{
    console.log("entrou no serice")
    return this.http.post<User>(this.baseUrl,user)

  }
}
