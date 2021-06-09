import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirContactoComponent } from './Componentes/anadir-contacto/anadir-contacto.component';
import { ListaContactosComponent } from './Componentes/lista-contactos/lista-contactos.component';

const routes: Routes = [
  {path: 'anadir-contacto', component: AnadirContactoComponent},
  {path: 'lista-contactos', component: ListaContactosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'anadir-contacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
