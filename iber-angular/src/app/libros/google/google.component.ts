import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ibe-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  clave: string;
  aLibros: Array<Libro>;
  url: string;

  constructor(public http: HttpClient) {
    this.clave = '';
    this.aLibros = [];
    this.url = environment.urlLibros;
   }

  ngOnInit(): void {
  }

  onBuscar(): void {
    if (this.clave) {
      this.aLibros = [];
      this.http.get(this.url + this.clave).toPromise().then(
        this.procesaLibros.bind(this)
      );
    }
  }

  onBuscarRx(): void {
    if (this.clave) {
      this.aLibros = [];
      this.http.get(this.url + this.clave).subscribe(
        this.procesaLibros.bind(this)
      );
    }
  }

  private procesaLibros(resp: any): void {
    const data = resp.items.map(
      (item: any) => { return new Libro(
        item.id,
        item.volumeInfo.title,
        item.volumeInfo.authors
      ); }
    );
    console.log(resp);
    this.aLibros = data;
  }

}

