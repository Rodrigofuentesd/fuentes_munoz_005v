import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  componentes : Componente[] = [
   
    {
      icon: 'pricetag',
      name: 'content',
      redirecTo: '/content'
    },
    {
      icon: 'cut-outline',
      name: 'Mas info',
      redirecTo: '/form'
    },
    {
      icon: 'analytics-outline',
      name: 'Datos!',
      redirecTo: '/crud'
    },
    {
      icon: 'pricetag',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar Sesion',
      redirecTo: '/Login'
    },
    {
      icon: 'people-outline',
      name: 'admin',
      redirecTo: '/admin'
    },
    
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
