import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ibe-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  usuario: string;
  constructor() {
    this.usuario = 'Pepe';
   }

  ngOnInit(): void {
  }

  onBorrar(ev: Event, elementName: string): void {
    console.log(ev);
    console.log(elementName);
    this.usuario = '';
  }
}
