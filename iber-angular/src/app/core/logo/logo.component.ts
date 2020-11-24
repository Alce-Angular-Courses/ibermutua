import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ibe-logo',
  template: `
    <div>
     <img [src]="logo.src" alt="{{ logo.alt }}">
    </div>
  `,
  styles: [
    ':host {display: block;}',
    'div {width: 50%;}',
    'img {width: 100%;}'
 ]
})

export class LogoComponent implements OnInit {
  logo: any;
  constructor() {

   }

  ngOnInit(): void {
    this.logo = {
      src: '../../../assets/logo.svg',
      alt: 'logotipo de Angular'
    };
  }

}
