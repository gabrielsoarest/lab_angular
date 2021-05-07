import { User } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var FB:any

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado:boolean = false;
  
  showMenuEmitter = new EventEmitter<boolean>()

  constructor(private router : Router) { }
  

  fazerLogin(user:User){
    console.log('login')
    if(user.name ==='a.a@email.com' && user.password==='123'){
      this.usuarioAutenticado=true
      this.showMenuEmitter.emit(true)
      this.router.navigate(['/product'])  
    } else{
      this.usuarioAutenticado = false
      this.showMenuEmitter.emit(false)
    }
  }

  submitFacebook():void{
   
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse){
            console.log('login successful', 'Success!');
          }else
           {
           console.log('User login failed');
         }
      }); this.router.navigate(['/product'])


  }

 




}
