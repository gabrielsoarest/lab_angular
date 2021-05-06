import { Usuario } from './../login/usuario.model';
import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './subscribe.service';
import { User } from './user.model';



@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private userService:SubscribeService) { }
  title="Bem vindo novamente :)"
  subtitle="Clique no botao abaixo para se logar"

 //user : User = new User
  
 user : User={
  id:'',
  name: '',
  password: '',
  email:''
 }
  ngOnInit(): void {
  }

  subscribe():void{
    
    this.userService.subscribeUser(this.user).subscribe(()=>{
      this.userService.showMessage('Cadastro realizado com sucesso! Sua matricula:' , '1' ),console.log(this.user)
    })
    console.log(this.user)
  }

  

}


