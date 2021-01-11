import { Component, Input, OnInit } from '@angular/core';
import { Matura } from 'src/app/models/matura';

@Component({
  selector: 'app-maturas-list',
  templateUrl: './maturas-list.component.html',
  styleUrls: ['./maturas-list.component.css']
})
export class MaturasListComponent implements OnInit {
  @Input() showBackButton: boolean;
  @Input() selectedType: string;
  @Input() selectedVariant: number; // but is this used?
  @Input() maturas: Matura[];
  @Input() years: number[]
  maturaTypes: string[];
  pageSize: number = 10;
  pageIndex: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.maturaTypes = [...new Set(this.maturas.map(m => m.type))].sort();
  }


}
