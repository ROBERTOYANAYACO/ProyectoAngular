import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimerProyecto';
  nombres = ['Ricardo', 'Martin'];
  nombre: string;
  mostrar: boolean;
  masmenos: string;
  indice = 0;

  constructor() {
    this.mostrar = false;
    this.nombre = this.nombres[0];
    this.masmenos = 'más';
  }
  
  cambiarNombre() {
    this.indice = this.indice === 0 ? 1 : 0;
    this.nombre =this.nombres[this.indice];
  }
  
  verMas() {
    this.mostrar = this.mostrar ? false: true;
    this.masmenos = this.mostrar ? 'menos': 'más';
  }
  
};

