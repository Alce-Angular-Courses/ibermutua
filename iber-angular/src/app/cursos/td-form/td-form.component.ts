import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno, Curso, Turno } from 'src/app/models/alumno';
import { CURSOS, TURNOS } from 'src/app/models/cursos';

@Component({
  selector: 'ibe-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  alumno: Alumno;
  cursos: Array<Curso>;
  turnos: Array<Turno>;
  @ViewChild('form', {static: true}) form!: NgForm;
  constructor() {
    this.alumno = new Alumno();
    this.cursos = CURSOS;
    this.turnos = TURNOS;
  }

  ngOnInit(): void {
  }

  enviar() {
    console.log('Enviando', this.alumno);
    console.log(this.form);
  }
}
