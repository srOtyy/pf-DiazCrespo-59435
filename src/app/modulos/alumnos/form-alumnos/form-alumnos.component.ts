import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IAlumno,listaAlumnos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrl: './form-alumnos.component.scss'
})
export class FormAlumnosComponent {
  constructor(
    private matDialogRef: MatDialogRef<FormAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    id: new FormControl('')
  });
  lista: IAlumno[] = listaAlumnos
  alumno: IAlumno | null = null
  estado: string = 'Crear'
  
  ngOnInit() {
    if(this.data){
      this.estado = 'Actualizar'
      this.lista = this.data.lista
      this.alumno = this.lista[this.data.i]
      this.formulario.patchValue(this.alumno)
    }
  }
  enviarFormulario(){
    if(this.formulario.valid){
      this.matDialogRef.close({
        ...this.formulario.value
      })
    }else{
      console.log("error en el formulario :(")
    }
  }
 
}
