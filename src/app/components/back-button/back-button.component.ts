import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `<a [routerLink]="['/']">Назад към всички записи</a>`,
  styles: []
})
export class BackButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
