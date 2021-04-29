import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var FB:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  title=' Organiza Aê! ;)'
  subtitle='A gente ajuda a você se organizar melhor'
  cadastrar = 'Ainda não sou cadastrado'
  acessar ='Entrar'
  recuperarSenha='Esqueci minha senha'
  loginFacebook ='Entrar com Facebook'
  loginGoogle ='Entrar com Gmail'
  loginTitle ='Login'
  
  //usuario : Usuario = new Usuario();

  usuario: Usuario = {
    nome:'',
    cpf:'',
    email:'',
    senha:''
    
  }


  
  showEsqueciSenha: boolean =false

  constructor(private authService: AuthService ,private router : Router,  public dialog: MatDialog) { }

  ngOnInit(): void {
   
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: '812937989632616',
        cookie: true,
        xfbml: true,
        version: 'v10.0'
      });
        
      FB.AppEvents.logPageView();   
        
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  login(): void{
    this.authService.fazerLogin(this.usuario)
  } 

  resetPassword(){
    console.log('rest')
   this.showEsqueciSenha=!this.showEsqueciSenha
console.log(this.showEsqueciSenha)
    //this.authService.resetPassword(this.usuario.cpf)
  }

  submitFacebook():void{
    console.log('sF')
   
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


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {email:this.usuario.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.usuario.email = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './reset.password.dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
