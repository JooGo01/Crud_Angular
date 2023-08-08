import { Component } from '@angular/core';
import { mascota } from 'src/app/interfaces/mascota';

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent {
  displayedColumns: string[] = ['Nombre', 'Edad', 'Raza', 'Color', 'Peso'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: mascota[] = [
  {nombre:'Delfi',edad:3,raza:'Pajaro',color:'Amarillo',peso:0.20},
  {nombre:'Poro',edad:1,raza:'Pajaro',color:'Gris',peso:0.30}
];