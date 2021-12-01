import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email:any;
  public password:any;
  public displayName:any;
  public pais: any;
  public sexo: any;
  constructor(
    public authSvc: AuthService, private router: Router
    ) {}

  ngOnInit() {}


  signup(){ 
    this.authSvc.signup({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
          displayName:this.displayName,
          pais:this.pais,
          sexo:this.sexo,
          uid:res.user.uid
        }
        this.authSvc.saveDetails(data).then(res=>{
         alert('Cuenta Creada!');
         this.router.navigate(['login']);
         
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);

      console.log(err);
    })
  }
 

  }



  
 


