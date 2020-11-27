import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'ibe-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  aUsuarios: Array<Usuario>;
  constructor(public us: UsersService) {
    this.aUsuarios = [];
    this.us.readAll().subscribe(
      resp => this.aUsuarios = resp
    );
   }

  ngOnInit(): void {
  }

  add(nuevo: Usuario): void {
    nuevo = {...nuevo};
    this.us.create(nuevo).subscribe(
      resp => {
        console.log(resp);
        this.aUsuarios.push(resp);
      }
    );
  }

  delete(id: number): void {
    this.us.delete(id).subscribe(
      resp => {
        console.log(resp);
        this.aUsuarios = this.aUsuarios.filter( item => item.id !== id);
      }
    );
  }

}
