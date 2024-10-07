import { Pipe, PipeTransform } from '@angular/core';
import { IAlumno } from '../interfaces/interfaces';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: IAlumno): string {
    const nombreCompleto = `${value.nombre} ${value.apellido}`
    return nombreCompleto;
  }

}
