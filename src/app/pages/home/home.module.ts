import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {HomeComponent} from './home.component';
import {ApiService} from '../../services/api/api.service';
import {SongModule} from '../../components/song/song.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule,
    SongModule,
    FormsModule
  ],
  providers: [ApiService],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule {
}
