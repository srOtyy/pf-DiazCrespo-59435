import { Component, inject} from '@angular/core';
import { IAlumno, listaAlumnos } from '../../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { FormAlumnosComponent } from '../form-alumnos/form-alumnos.component';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.scss'
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['No', 'nombre-completo', 'email', 'id','botones'];
  dataSource: IAlumno[] = listaAlumnos;
  longitudDatos: number = this.dataSource.length
  
 
  readonly dialog = inject(MatDialog);
  generarId(): string {
    return Math.random().toString(16).substring(2, 6);
  }
  posicionAlumno(id:string,number:number):number {
    const index: number | undefined = this.dataSource.findIndex( alumno => alumno.id === id ) + number
    if(index || index === 0){
      return index
    }else{
      console.log("Usuario no encontrado y te retorna el primero jajaj")
      return 9090
    }
  }
  openDialog(index: number,crear:boolean): void {
    const datos = {
      i: index,
      lista: this.dataSource
    }
    if(!crear){
      const dialogRef = this.dialog.open(FormAlumnosComponent,{
        data:datos})
      dialogRef.afterClosed().subscribe({
          next: (alumno) =>{//actualizamos datasource con map
            if(alumno){
              this.dataSource = this.dataSource.map( al => al.id === alumno.id ? {...al,...alumno} : al)
            }
          }
      });
    }else{
      const dialogRef = this.dialog.open(FormAlumnosComponent)
      dialogRef.afterClosed().subscribe({
          next: (alumno) =>{ // agregamos al datasource el alumno nuevo
            if(alumno){
              alumno.id = this.generarId()
              this.dataSource = [...this.dataSource,alumno]
            }
          }
      });
    }
  }
}
