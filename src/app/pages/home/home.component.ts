import {AfterViewInit, Component, OnInit} from '@angular/core';

import { ApiService } from 'src/app/services/api/api.service';
import { SongModel, SongResponse } from 'src/app/model/song.model';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  song:SongModel;
  typeBool: boolean;
  listSongs: SongResponse;
  page_number = 1;
  page_limit = 10;
  constructor(
    private apiService: ApiService,
    private loadingController: LoadingController,
    private alertController: AlertController) {
  }

  ngOnInit() {
    this.getSongs(environment.initialSearch.name,environment.initialSearch.type)
  }

  ngAfterViewInit(): void {
  }


  async getSongs(name, type){
    const loading = await this.loadingController.create({
      message: 'Loading Songs'
    })
    await loading.present();
    this.apiService.searchSongs(name,type)
      .subscribe(
        res =>{
          loading.dismiss();
          console.log(res);
          this.listSongs = res
          console.log(this.listSongs)
        },
        error =>{
          loading.dismiss();
          console.error(error)
        }
      )
    
  }

  searchSong(value, type){
    console.log(value)
    console.log(type)
    let typeContent = type === true ? "movie" : 'music'
    console.log(typeContent)
    this.getSongs(value, typeContent)
  }
}
