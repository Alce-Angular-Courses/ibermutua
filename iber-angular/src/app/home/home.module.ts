import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';
import { HomeComponent } from './home.component';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';


@NgModule({
  declarations: [
    HomeComponent,
    SaludoComponent,
    SaludoLocalComponent,
    SaludoRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
