import {Component} from '@angular/core';
import {ApiService} from './services/api/api.service';
import {SongResponse} from './model/song.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private api: ApiService) {
  }

  //comentado porque el AppComponent es Global entonces cada vez que se inicia la app se iba a ejecutar y solo lo necesitas que se haga la llamada cuando se inicie el Home Component 

/*   ngAfterViewInit(): void {
    const artist = 'Shakira';
    const media = 'musicVideo'; // Or movie
    this.api.searchSongs(artist, media).subscribe(
      (data: SongResponse) => {
        console.log('Data', data);
        console.log('Data', data.results[0]);
      },
      error => {
        console.error('searchSongs.error', error);
      }
    );
  } */
}
