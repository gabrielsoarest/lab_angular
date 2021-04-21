import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title=' Organiza Aê! ;)'
  subtitle='A gente ajuda a você se organizar melhor'
  cadastrar = 'Ainda não sou cadastrado'
  acessar ='Continuar'
  recuperarSenha='Esqueci minha senha'
  usuario : Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.fazerLogin(this.usuario)
  } 

}
