import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SeasonInterface, Episode } from '../../models/series';

@Component({
  selector: 'app-season',
  imports: [],
  templateUrl: './season.html',
  styleUrl: './season.css',
})
export class Season {
  @Input() season?: SeasonInterface;
  @Input() isOpenByDefault: boolean = false;

  @Output() episodeSelected = new EventEmitter<Episode>();

  selectEpisode(episode: Episode) {
    this.episodeSelected.emit(episode);
  }
}
