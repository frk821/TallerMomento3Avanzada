import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from '../services/habitaciones.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {

  public habitaciones:any[]=[]

  constructor(public servicioHabitacion:HabitacionesService) {
    servicioHabitacion.consultarHabitaciones()
    .subscribe(respuesta=>{
      console.log(respuesta)
      this.habitaciones=respuesta.datos
    })
  }

}
