import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario.model';
declare var FB:any

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado:boolean = false;
  
  showMenuEmitter = new EventEmitter<boolean>()

  constructor(private router : Router) { }


  fazerLogin(usuario:Usuario){
    console.log('login')
    if(usuario.nome ==='a.a@email.com' && usuario.senha==='123'){
      this.usuarioAutenticado=true
      this.showMenuEmitter.emit(true)
      this.router.navigate(['/product'])  
    } else{
      this.usuarioAutenticado = false
      this.showMenuEmitter.emit(false)
    }
  }

  resetPassword(cpf:string){

    console.log('entrou no reset')
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
