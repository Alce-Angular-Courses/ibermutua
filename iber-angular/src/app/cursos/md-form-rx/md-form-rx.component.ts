import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso, Turno } from 'src/app/models/alumno';
import { CURSOS, TURNOS } from 'src/app/models/cursos';

@Component({
  selector: 'ibe-md-form-rx',
  templateUrl: './md-form-rx.component.html',
  styleUrls: ['./md-form-rx.component.css']
})
export class MdFormRxComponent implements OnInit {

  fgAlumno: FormGroup;
  cursos: Array<Curso>;
  turnos: Array<Turno>;
  constructor(public fb: FormBuilder) {
    // this.alumno = new Alumno();
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.fgAlumno = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellidos: ['', []],
        dni: ['', []],
        email: ['', []],
        nacim: ['', []],
        coment: ['', []],
        isOk: ['', []],
        turno: ['', []],
        curso: ['', []]
      }
    );
  }

  ngOnInit(): void {
  }
  enviar(): void {
    /* const alumno = new Alumno(
      this.fgAlumno.value.nombre, ...
    ); */
    const alumno = this.fgAlumno.value;
    console.log('Enviando', alumno);
  }
}
