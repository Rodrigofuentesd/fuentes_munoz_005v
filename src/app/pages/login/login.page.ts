import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:any;
  public password:any;
  usuario= null;
  
  constructor(
    private router:Router,
    private authSvc:AuthService,){}
  

  ngOnInit() {
  }
  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
       alert('Bienvenido ');
       this.router.navigate(['inicio']);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) { 
        alert('Bienvenido '+ user['displayName']);
        this.router.navigate(['inicio']);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

 
}
