import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ibe-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.css']
})
export class ByServiceComponent implements OnInit {

  clave: string;
  aLibros: Array<Libro>;

  constructor(public ls: LibrosService) {
    this.clave = '';
    this.aLibros = [];
   }

  ngOnInit(): void {
  }

  onBuscar(): void {
    if (this.clave) {
      this.ls.buscar(this.clave).then(
        resp => this.aLibros = resp
      );
    }
  }

  onBuscarRx(): void {
    if (this.clave) {
      this.ls.buscarRx(this.clave).subscribe(
        resp => this.aLibros = resp
      );
    }
  }

}
