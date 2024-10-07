import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { FormatoDirective } from './formato.directive';
@NgModule({
  declarations: [
    NavbarComponent,
    NombreCompletoPipe,
    FormatoDirective
  ],
  imports: [
    CommonModule,MatTableModule,MatToolbarModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule
  ],
  exports:[MatTableModule,NavbarComponent,MatIconModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,NombreCompletoPipe,FormatoDirective]
})
export class CompartidosModule { }
