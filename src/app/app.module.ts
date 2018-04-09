import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { SpotifyService } from './services/spotify.service';
import {DomseguroPipe } from './pipes/domseguro.pipe';
import {CapitalizadoPipe } from './pipes/capitalizado.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    CapitalizadoPipe,
    DomseguroPipe,
    ArtistComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    app_routing
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
