import { Component, Input, OnInit } from '@angular/core';
import { Matura } from 'src/app/models/matura';

@Component({
  selector: 'app-matura-item',
  templateUrl: './matura-item.component.html',
  styleUrls: ['./matura-item.component.css']
})
export class MaturaItemComponent implements OnInit {
  @Input() matura: Matura;
    
  filesRepoDir: string = "https://raw.githubusercontent.com/maturabg/audio/audios/eng/dzi/";
  audioFilesDir: string;
  alternativeTypeMatura: Matura;

  constructor() {
  }

  ngOnInit(): void {    
    this.setAudioFilesDir();
  }


  private setAudioFilesDir() {
    this.audioFilesDir = this.filesRepoDir + this.matura.year + '/' + this.matura.variant + '/';
    // this.matura.type + '/'
  }
}
