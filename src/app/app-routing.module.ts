import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosHotelComponent } from './servicios-hotel/servicios-hotel.component';
import { FormareservaComponent } from './formareserva/formareserva.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios-hotel', component: ServiciosHotelComponent},
  { path: 'formareserva', component: FormareservaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
