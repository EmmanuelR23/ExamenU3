import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { AnadirContactoComponent } from './Componentes/anadir-contacto/anadir-contacto.component';
import { ListaContactosComponent } from './Componentes/lista-contactos/lista-contactos.component';
import { ReactiveComponent } from './Componentes/reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnadirContactoComponent,
    ListaContactosComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
