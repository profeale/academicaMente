import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importa los componentes
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent }           from './login/login.component';

@NgModule({
  declarations: [
   RegistroComponent,
   LoginComponent;
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
