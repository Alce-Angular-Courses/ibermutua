import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'ibe-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() usuario: Usuario;
  @Output() delete: EventEmitter<number>;
  constructor() {
    this.usuario = new Usuario();
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSendDelete(): void {
    this.delete.next(this.usuario.id as number);
  }

}
