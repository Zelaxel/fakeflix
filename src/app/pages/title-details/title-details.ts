import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Title, TitleTypes } from '../../models/title';

@Component({
  selector: 'app-title-details',
  imports: [Header],
  templateUrl: './title-details.html',
  styleUrl: './title-details.css',
})
export class TitleDetails {
  title?: Title;
  videoTitle: string = '';
  thumbnail: string = '';
  video: string = '';

  ngOnInit() {
    this.title = window.history.state.data;
    console.log(this.title);

    if (this.title && this.title.type == TitleTypes.Movies) {
      this.thumbnail = this.title.imageUrl;
      this.video = this.title.videoUrl;
    }
  }
}
