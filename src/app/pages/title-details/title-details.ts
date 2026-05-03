import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Title, TitleTypes } from '../../models/title';
import { Episode, SeasonInterface, Series } from '../../models/series';
import { Season } from '../../components/season/season';
import { Router } from '@angular/router';


@Component({
  selector: 'app-title-details',
  imports: [Header, Season],
  templateUrl: './title-details.html',
  styleUrl: './title-details.css',
})
export class TitleDetails {
  protected readonly TitleTypes = TitleTypes;

  title?: Title;
  videoTitle: string = '';
  thumbnail: string = '';
  video: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.title = window.history.state.data;
    console.log(this.title);

    if (this.title && this.title.type == TitleTypes.Movies) {
      this.video = this.title.videoUrl;
      this.videoTitle = this.title.name;
    } else {
      const firstSeason = (this.title as Series).seasons[0];
      this.setVideoDisplay(firstSeason, firstSeason.episodes[0]);
    }
  }

  getSeasons() {
    return (this.title as Series).seasons;
  }

  protected setVideoDisplay(season: SeasonInterface, episode: Episode) {
    this.videoTitle = `Season ${season.index} - Episode ${episode.idx}: ${episode.name}`;
    this.video = episode.videoUrl;
  }

  openPlayer() {
    this.router.navigate(['/video-player'], {
      state: {
        data: {
          name: this.videoTitle,
          videoUrl: this.video,
        },
      },
    });
  }
}
