import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ibe-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>

  constructor(public ls: LibrosService) {
    this.clave = '';
    this.aLibros = [];
   }

  ngOnInit(): void {
  }

  onBuscar(): void {
    if (this.clave) {
      this.aLibros = [];
      this.aLibros = this.ls.buscarMock(this.clave)
    }
  }

  onBuscarAsync(): void {
    if (this.clave) {
      this.aLibros = [];
      this.ls.buscarMockAsync(this.clave).then(
        (resp) => {this.aLibros = resp; }
      );
    }
  }

  onBuscarRx(): void {
    if (this.clave) {
      this.aLibros = [];
      this.ls.buscarMockRx(this.clave).subscribe(
        (resp) => {this.aLibros = resp; }
      );
    }
  }


}
