import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent{

  termino:string = '';

  constructor(public _spotify:SpotifyService) {

  }

  buscarArtista(){
    if(this.termino.length != 0){
      this._spotify.getArtistas(this.termino)
              .subscribe();
    }
  }


}
