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

  user : User = new User
  
  ngOnInit(): void {
  }

  subscribe():void{
    console.log(this.user)
    this.userService.subscribeUser(this.user).subscribe(()=>{
      this.user
    })
  }

  
}
