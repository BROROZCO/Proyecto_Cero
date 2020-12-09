import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Uso de interpolacion
  Nombre = 'Bryan Orozco';

  constructor(){
    // Actualizar la variable Nombre y poner en MIGUEL
    setInterval( ()=> this.Nombre = 'Miguel', 3000 );
  }

  getSuma(numero1: number, numero2: number)
  {
    return numero1 + numero2
  }
}
