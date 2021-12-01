import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  users = {
    displayName: "",
    email: "",
    pais:"",
    password:"",
    sexo:""
  }
  
  listaDeUsuarios = [];


  constructor( private firebase:CrudService) { }

  ngOnInit() {
    this.firebase.getAll('users').then(firebaseResponse => {
      firebaseResponse.subscribe(listaDeusersRef => {

        this.listaDeUsuarios = listaDeusersRef.map(usersRef =>{
          let users=usersRef.payload.doc.data();
          users['id']=usersRef.payload.doc.id;
          return users;
        })
        
        })
      })
    }

    eliminar(id){
      this.firebase.delete('users',id).then(res =>{
        alert("Se elimino  con exito");
      }).catch(err => {
        console.log("Error al eliminar", err);
      })
    }

  }

