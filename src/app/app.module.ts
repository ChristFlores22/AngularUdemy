import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contadores/contadores.module';


@NgModule({
  declarations: [
    //Se listan los componentes que se utilizaran en la aplicación.
    AppComponent,
  ],
  imports: [
    // Se listan los modulos a utilizar en la aplicación.
    BrowserModule,
    HeroesModule,
    ContadoresModule
  ],
  providers: [],//Servicios especificos al Modulo.
  bootstrap: [AppComponent] // Modulo Principal
})
export class AppModule { }
