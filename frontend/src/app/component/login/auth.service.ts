import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario.model';

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
}
