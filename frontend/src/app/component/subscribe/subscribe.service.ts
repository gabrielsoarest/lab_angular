import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http:HttpClient, private snackBar : MatSnackBar) { }

   baseUrl='http://localhost:3001/user'

   showMessage(msg:string):void{
    this.snackBar.open(msg,'',{
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
