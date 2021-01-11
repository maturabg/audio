import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Matura } from 'src/app/models/matura';
import { maturas } from '../../../assets/data-maturas-english';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matura: Matura;
  maturas: Matura[];
  years: number[];
  selectedLang: string;
  selectedYear: number;
  selectedType: string;
  selectedVariant: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.maturas = maturas;
    this.years = [...new Set(this.maturas.map(m => m.year))].sort((a, b) => b - a);

    this.route.params.subscribe(params => {
      this.selectedLang = params['lang'];
      this.selectedYear = +params['year'];
      this.selectedType = params['type'];
      this.selectedVariant = +params['var'];

      if (this.selectedYear && this.years.some(y => y == this.selectedYear)) {
        this.years = this.years.filter(y => y == this.selectedYear)
        // TODO: if no such year in arr navigate to 404
      }
      

      this.matura = maturas.find(m => m.year === this.selectedYear && m.type === this.selectedType && m.variant === this.selectedVariant)
    });
      // should this logic be in matura-item (pass all maturas) or rather find the alts here?
      // this.alternativeTypeMatura = maturas.maturas.find(m => m.year === this.matura.year && m.variant === this.matura.variant && m.type != this.matura.type);//.type;
    }

}
