import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ibe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string;
  constructor() {
   this.titulo = 'Curso de Angular';
   }

  ngOnInit(): void {
    this.titulo = 'Curso de Angular para Ibermutua';
  }

}
