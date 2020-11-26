import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable(/* {
  providedIn: 'root'
} */)
export class StorageService {
  tareasStore: string;
  constructor() {
    this.tareasStore = 'tareas';
  }

  getTareas(): Array<Tarea> {
    const data = localStorage.getItem(this.tareasStore) as string;
    let tarea: Array<Tarea> = []
    if (data) {
      tarea = JSON.parse(data);
    }
    return(tarea);
  }

  setTareas(tarea: Array<Tarea>): void {
    const data = JSON.stringify(tarea);
    localStorage.setItem(this.tareasStore, data);
  }

  removeTareas(): void {
    localStorage.removeItem(this.tareasStore)
  }
}
