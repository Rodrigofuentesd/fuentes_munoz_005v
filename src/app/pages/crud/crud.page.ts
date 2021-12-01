import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  users = {
    displayName: "",
    email: "",
    pais:"",
    password:"",
    sexo:""
    
  }
  constructor( private firebase:CrudService) { }

  ngOnInit() {
  }

  usersup(){
    this.firebase.create("users",this.users).then(res => {
      console.log(res);
    }).catch(err => {
      console.log("Error en la integracion: ",err)
    });
  }
 
}

