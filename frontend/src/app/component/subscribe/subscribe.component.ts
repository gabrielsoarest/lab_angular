
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { SubscribeService } from './subscribe.service';




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
     this.user = this.user
    })
    
    console.log(this.user)
  }

  

}


