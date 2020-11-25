import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'ibe-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea;
  aTareas: Array<Tarea>;
  store: string;

  constructor() {
    this.store = 'tareas';
    this.tarea = new Tarea();
    this.aTareas = localStorage.getItem(this.store) ?
      JSON.parse(localStorage.getItem(this.store) as string) : [];
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    if (!this.tarea.nombre) {
      return;
    }
    this.aTareas.push(this.tarea);
    this.tarea = new Tarea();
    this.save();
  }

  onCheckChange(): void {
    this.save();
  }

  onBorrar(i: number): void {
    this.aTareas.splice(i, 1);
    this.save();
  }

  private save(): void {
    localStorage.setItem(this.store, JSON.stringify(this.aTareas));
  }
}
