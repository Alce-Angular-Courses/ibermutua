import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'ibe-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  aUsuarios: Array<Usuario>;
  constructor() {
    this.aUsuarios = [];
   }

  ngOnInit(): void {
  }

  add(nuevo: Usuario): void {
    nuevo = {...nuevo};
    nuevo.id = this.aUsuarios.length + 1;
    this.aUsuarios.push(nuevo);
    console.log(this.aUsuarios);
  }

  delete(id: number): void {
    this.aUsuarios = this.aUsuarios.filter( item => item.id !== id);
  }

}
