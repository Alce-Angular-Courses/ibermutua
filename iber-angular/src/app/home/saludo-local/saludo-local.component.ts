import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ibe-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {
  @ViewChild('usuario', {static: true}) usuariRef: any;

  constructor() {
    console.log('Constructor', this.usuariRef);
  }

  ngOnInit(): void {
    console.log('onInit', this.usuariRef);
    console.dir(this.usuariRef.nativeElement);
  }

}
