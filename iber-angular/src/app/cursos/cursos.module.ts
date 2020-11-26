import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from '../cursos/cursos.component';
import { TdFormComponent } from './td-form/td-form.component';
import { MdFormRxComponent } from './md-form-rx/md-form-rx.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, TdFormComponent, MdFormRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
