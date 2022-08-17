import {Component, Input, OnInit} from '@angular/core';
import {SongModel} from '../../model/song.model';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  @Input() currentSong: SongModel;
  @Input() even : boolean;
  Background: string
  constructor() {
    
  }


  ngOnInit() {
    this.setColor()
  }
  ngAfterViewInit(){
    this.setColor()
  }

  setColor(){
  
    if(this.even){
      this.Background = environment.cardColors.even;
    
    }else{
      this.Background = environment.cardColors.odd
    }
  }

  goToSong(url){
    window.open(url, '_blank').focus();
  }

}

