import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros-data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  buscarMock(clave: string): Array<Libro>  {
    return  LIBROS;
  }

  buscarMockAsync(clave: string): Promise<Array<Libro>>  {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(LIBROS);
      }, 1000);
    } );
  }

  buscarMockRx(clave: string): Observable<Array<Libro>> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(LIBROS);
      }, 1000);
    });
  }
}
