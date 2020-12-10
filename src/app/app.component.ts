import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Uso de interpolacion
  Nombre = 'Bryan Orozco';
  textoPlaceholder = "Escriba algo aqui!";
  deshabilitado = true;
  imgLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";

  texto = "Esta es una practica de Event Binding";

  constructor(){
    // Actualizar la variable Nombre y poner en MIGUEL
    // setInterval( ()=> this.Nombre = 'Miguel', 3000 );
    setInterval( ()=> this.deshabilitado = false , 3000 );
  }

  getSuma(numero1: number, numero2: number)
  {
    return numero1 + numero2
  }

  cambiarTexto(): void{
    this.texto = "El miercoles sin falta"
  }


}
