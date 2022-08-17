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
  textoBuscar: string;
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
      message: 'Cargando'
    })
    await loading.present();
    console.log(name)
    if(name == "" || undefined){
      this.getSongs(environment.initialSearch.name,environment.initialSearch.type)
    }else{
      this.apiService.searchSongs(name,type)
      .subscribe(
        res =>{

          loading.dismiss();
          if(res.resultCount !=0){
            this.listSongs = res
          }else{
            this.presentAlertNoContent()
            this.listSongs = res
          }
        
        },
        error =>{
          loading.dismiss();
          this.presentAlertError();
          
          
        }
      )
    }
    
    
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: environment.mensajeError.Titulo,
      message: environment.mensajeError.Mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertNoContent() {
    const alert = await this.alertController.create({
      header: environment.mensajeError.Titulo,
      message: "No hemos logrado encontrar tu búsqueda",
      buttons: ['OK']
    });
    await alert.present();
  }

  searchSong(value, type){
    console.log(value)
    console.log(type)
    let typeContent = type === true ? "movie" : 'music'
    console.log(typeContent)
    this.getSongs(value, typeContent)
  }
}
