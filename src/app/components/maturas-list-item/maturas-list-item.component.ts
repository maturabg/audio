import { Component, Input, OnInit } from '@angular/core';
import { Matura } from 'src/app/models/matura';

@Component({
  selector: 'app-maturas-list-item',
  templateUrl: './maturas-list-item.component.html',
  styleUrls: ['./maturas-list-item.component.css']
})
export class MaturasListItemComponent implements OnInit {
  @Input() matura: Matura;

  constructor() { }

  ngOnInit(): void {
  }

}
