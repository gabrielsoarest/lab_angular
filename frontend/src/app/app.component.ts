import { Component } from '@angular/core';
import { AuthService } from './component/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  title = 'frontend';
  
  showMenu:boolean = false

  constructor(private authService:AuthService){

  }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show=>this.showMenu=show
    );
  }

}
