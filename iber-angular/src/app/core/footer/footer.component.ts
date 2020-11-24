import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ibe-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  hoy: Date;
  constructor() {
    this.autor = 'Alejandro Cerezo';
    this.hoy = new Date();
   }

  ngOnInit(): void {
  }

}
