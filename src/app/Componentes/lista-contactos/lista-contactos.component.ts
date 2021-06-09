import { Component, OnInit } from '@angular/core';
import { ContactossService } from 'src/app/Servicios/contactoss.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
 
  contactos: any = {};

  constructor( private servicioContacto: ContactossService) {
    this.contactos = servicioContacto.getContactos();
    console.log(this.contactos);
   }

  ngOnInit(): void {
  }

}
