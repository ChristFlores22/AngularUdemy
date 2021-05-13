import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    //Se listan los componentes que se utilizaran en la aplicación.
    AppComponent,
    ContadorComponent,
    HeroeComponent
  ],
  imports: [
    // Se listan los modulos a utilizar en la aplicación.
    BrowserModule
  ],
  providers: [],//Servicios especificos al Modulo.
  bootstrap: [AppComponent] // Modulo Principal
})
export class AppModule { }
