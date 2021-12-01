import { Component } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor() {}

  componentes : Componente[] = [

    {
      icon: 'pricetag',
      name: 'Sobre el Marketing Digital',
      redirecTo: '/content'
    },
    {
      icon: 'cut-outline',
      name: 'mas Info',
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
      icon: 'people-outline',
      name: 'admin',
      redirecTo: '/admin'
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar Sesion',
      redirecTo: '/login'
    },


  ];



}
