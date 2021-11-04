# Proyecto Movil

_Proyecto movil para curso de  PROGRAMACION DE APLICACIONES MOVILES_

## Comenzando 🚀

_Explicare a continuacion como implementar Firebase para ionic angular_


### Pre-requisitos 📋

_Cosas Necesarias:_

```
Firebase 
Angular/fire
```

### Instalación 🔧

_Para instalar Firebase es obligatorio tener una cuenta gmail, de esta manera se podra acceder a la base de datos_
_se debe instalar  firebase con el siguiente comando:_

```
npm install firebase (consultar documentacion oficial https://firebase.google.com/docs/web/setup)

```

_Luego_

_se debe ejecutar el segundo comando para instalar todas dependencias de angular fire_
```
npm install @angular/fire firebase --save (consultar documentacion https://github.com/angular/angularfire para instalar en ionic consultar la opcion Installation and Setup with Ionic CLI)
 ```



## Conexion a base de datos ⚙️

_Conexion con base de datos:_
_Lo primero es ir a la pagina de firebase https://console.firebase.google.com/u/0/?hl=es,_
_crear una cuenta o iniciar sesion si ya posee una._
_crear un proyecto, si desea mantiene la opcion de google analityc en caso de que no solo apriete continuar._
_al crerse su proyecto debera hacer click en la opcion de web que se señala con el simbolo </>_
_asignarle un nombre y registrar su app, cuando te registras vas la parte superior izquierda y seleccionas la tuerca que esta junto a _Descripción general del proyecto, se desplegara un menu donde seleccionaras configuracíon del proyecto, bajas hasta donde te aparecera tu _proyecto y aparecera una opcion de "configuracion del SDK" del contenido que aparece solamente seleccionaremos lo siguiente:_

    ```
    const firebaseConfig = {
    apiKey: xxxxxx
    authDomain: xxxxxxx
    projectId: xxxxxxxxxxx
    storageBucket: xxxxxxxxxxx
    messagingSenderId: xxxxxxxxxxxx
    appId: xxxxxxxxxxxxxx
    measurementId: xxxxxxxxxxxx
    };
    ```
_el codigo que se copio se debera insertar en el archivo_
_"environment.ts" y se le debera de borrar la palabra const y cambiar el signo = por :, tambien borrar el ; final quedando de esta manera:_

    ```
    firebaseConfig : {
        apiKey: xxxxxxxxxxxxx,
        authDomain: xxxxxxxxxx,
        projectId: xxxxxxxxxx,
        storageBucket: xxxxxxxxxxxx,
        messagingSenderId: xxxxxxxxxxxxx,
        appId: xxxxxxxxxxxxxx,
        measurementId: xxxxxxxxxxxx

    ```
_deveras volver a firebase y apretar en authentication y hacer click en comenzar._
_seleccionar la opcion correo electronico, y google habilitando las opciones correspondientes  (google pide proyect name y correo, pero estos _se asignan automaticamente) ._
_luego hacer click en firestore database y hacer click en crear base de datos, seleccionar la opcion comenzar en modo de prueba y continuar luego en habilitar y ya esta lista la base de datos_

## Construido con 🛠️

_Herramientas Utilizadas_

* [ionic](https://ionicframework.com) 
* [Angular](https://angular.io) 
* [Node](https://nodejs.org/es/)
* [Firebase](https://console.firebase.google.com/u/0/)


## Autores ✒️



* **Rodrigo Fuentes** - *Trabajo Inicial-Documentación* - [rogerazo](https://github.com/rogerazo)
* **Manuel Muñoz** - *Trabajo Inicial* 



