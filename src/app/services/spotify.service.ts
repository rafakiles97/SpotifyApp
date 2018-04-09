import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  token:string = 'BQBG6UjVfL-FogR5aMXDXY4nAkD9m0kyyNSaiNRVfeS_1MS1ZBdQSJIreDEBHq6bNsZqLpM-C51UW7zTbsU';
  artistas:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';

  constructor( public _httpClient:HttpClient) {
      //console.log("SpotifyService listo")
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });
    return headers;
  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    let headers = this.getHeaders();

    return this._httpClient.get(url, {headers});
  }

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();

    return this._httpClient.get(url, {headers});
  }

  getArtistas(termino:string){
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;
    let headers = this.getHeaders();

    return this._httpClient.get(url, {headers})
            .map((response:any) => {
              this.artistas = response.artists.items;
              return this.artistas;
            });
  }
}
