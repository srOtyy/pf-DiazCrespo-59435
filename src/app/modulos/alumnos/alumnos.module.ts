import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    FormAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,CompartidosModule
  ],
  exports:[ListaAlumnosComponent]
})
export class AlumnosModule { }
