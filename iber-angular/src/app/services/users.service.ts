import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.urlUsers;
  }

  readAll(): Observable<Array<Usuario>> {
    return this.http.get(this.url) as Observable<Array<Usuario>>;
  }

  read(id: number | string): Observable<Usuario> {
    return this.http.get(this.url + id) as Observable<Usuario>;
  }

  create(user: Usuario): Observable<Usuario> {
    return this.http.post(this.url, user) as Observable<Usuario>;
  }

  update(id: number | string, user: Usuario): Observable<Usuario> {
    return this.http.put(this.url + id, user) as Observable<Usuario>;
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
