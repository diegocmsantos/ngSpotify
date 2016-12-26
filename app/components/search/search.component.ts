import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Artist } from '../../models/Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {

  private searchStr:string;
  private _artists: Artist[];

  constructor(private _spotifyService: SpotifyService) {

  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res);
        this._artists = res.artists.items;
      });
  }

}
