import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros-data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url: string;

  constructor(public http: HttpClient) { 
    this.url = environment.urlLibros;
  }

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

  buscar(clave: string): Promise<Array<Libro>> {
    // if (clave) {
     return this.http.get(this.url + clave).toPromise().then(
      (resp: any) => {
        return resp.items.map(
          (item: any) => { return new Libro(
            item.id,
            item.volumeInfo.title,
            item.volumeInfo.authors
          ); }
        );
      }
     );
    // }
  }

  buscarRx(clave: string): Observable<Array<Libro>> {
    return this.http.get(this.url + clave)
    .pipe( map( (res: any) =>  res.items) )
    .pipe ( map( (res: Array<any>) => {
      return res.map( (item) => { return new Libro(
          item.id,
          item.volumeInfo.title,
          item.volumeInfo.authors
        );
        });
      })
    );
  }

}
