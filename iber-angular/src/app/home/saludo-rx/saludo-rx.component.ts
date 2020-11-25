import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ibe-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: [
    './saludo-rx.component.css',
    '../home.component.css'
  ]
})
export class SaludoRxComponent implements OnInit {
  fcUsuario: FormControl;
  constructor() {
    this.fcUsuario = new FormControl();
    this.fcUsuario.setValue('María');
   }

  ngOnInit(): void {
  }

  onBorrar(ev: Event): void {
    console.log(ev);
    this.fcUsuario.reset();
  }

}
