import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje=""
  registrado=false

  registrarUsuario(){
    this.registrado=true
    this.mensaje="usuario registrado con exito"
  }
}
