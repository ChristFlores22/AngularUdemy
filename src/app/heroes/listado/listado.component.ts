import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  // constructor() { 
  //   console.log('constructor')
  // }


 // ngOnInit(): void {

    // Se utiliza para inicializar cosas.
    // peticiones a algun servicio.

   // console.log('ngOnInit')
  //}
  palabra: string = 'hola';
  heroes: string[]= ['Spiderman', 'Ironman','Hulk','Thor', 'Capitan America'];
  heroeBorrado: string = '...';
  borrarHeroe():void{
    this.heroeBorrado = this.heroes.shift() || '...';
  }
}
