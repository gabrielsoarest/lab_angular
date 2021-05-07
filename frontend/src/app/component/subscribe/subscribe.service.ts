import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http:HttpClient, private snackBar : MatSnackBar) { }

   baseUrl='http://localhost:3001/user'

   showMessage(msg:string,matricula:string):void{
    this.snackBar.open(msg,matricula,{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }



  subscribeUser(user:User):Observable<User>{
    console.log("entrou no serice")
    return this.http.post<User>(this.baseUrl,user)

  }
}
