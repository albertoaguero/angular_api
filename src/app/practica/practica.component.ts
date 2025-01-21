import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service'; // adjust the path as necessary
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor], //no importar httpclient  porque esta en app.config.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

public datos:any[] = [];//guardar los datos obtenidos del servicio
constructor(private servicio:ServiciopracticaService){}//inyectar dependencia de servicio
ngOnInit():void{
  this.servicio.getDatos().subscribe((datos)=>{ //obtener datos del servicio
    this.datos = datos; //renderiza y pinta en el template html
  });
}//cierra clase
}//cierra ngOnInit