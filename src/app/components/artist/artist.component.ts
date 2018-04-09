import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista:any = { };
  tracks:any = [];

  constructor( private activatedRoute: ActivatedRoute,
               public _spotify:SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params
            .map( params => params['id'])
            .subscribe(id => {
              this._spotify.getArtista(id).subscribe(artista => {
                console.log("artista");
                console.log(artista);

                this.artista = artista;
                this._spotify.getTop(id).map((response:any) => response.tracks)
                .subscribe(tracks => {
                  console.log("tracks");
                  console.log(tracks);
                  console.log(this.tracks)
                  this.tracks = tracks;

                });
              });
            });

  }

}
