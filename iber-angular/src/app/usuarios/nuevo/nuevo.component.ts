import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'ibe-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  fcName: FormControl;
  fcEmail: FormControl;
  @Output() add: EventEmitter<Usuario>;

  constructor() {
    this.fcName = new FormControl();
    this.fcEmail = new FormControl();
    this.add = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSendAdd(): void {
    const usuario = new Usuario();
    usuario.nombre = this.fcName.value;
    usuario.email = this.fcEmail.value;
    this.add.next(usuario);
    this.fcName.reset();
    this.fcEmail.reset();
  }
}
