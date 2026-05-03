import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase/firebase.service';


@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css',
})
export class VideoPlayer implements OnInit {


  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('player') playerRef!: ElementRef;


  video: string = '';
  title: string = '[Title]';

  isFullscreen = false;
  isPlaying = false;
  progress = 0;
  currentTime = '00:00:00';
  volume = 1;

  showAudioMenu = false;
  showSubsMenu = false;
  showSubtitles = false;

  subtitleText = '[Subtítulos]';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
  ) {}


  ngOnInit() {
    const state = history.state?.data;
    console.log('STATE RECIBIDO:', state);
    if (state?.videoUrl) {
      this.title = state.name;
      this.video = '/videos/' + state.videoUrl;
    }
  }


  togglePlay(videoEl?: HTMLVideoElement) {
    const video = videoEl || this.videoRef.nativeElement;

    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }


  rewind() {
    this.videoRef.nativeElement.currentTime -= 10;
  }

  forward() {
    this.videoRef.nativeElement.currentTime += 10;
  }


  changeVolume(videoEl?: HTMLVideoElement) {
    const video = videoEl || this.videoRef.nativeElement;
    video.volume = this.volume;
  }

  toggleAudioMenu() {
    this.showAudioMenu = !this.showAudioMenu;
  }


  toggleSubs() {
    this.showSubsMenu = !this.showSubsMenu;
  }

  enableSubs() {
    this.showSubtitles = true;
    this.showSubsMenu = false;
  }

  disableSubs() {
    this.showSubtitles = false;
    this.showSubsMenu = false;
  }


  updateProgress() {
    const video = this.videoRef.nativeElement;

    this.currentTime = this.formatTime(video.currentTime);

    if (video.duration) {
      this.progress = (video.currentTime / video.duration) * 100;
    }
  }

  seek(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const pos = (event.clientX - rect.left) / rect.width;

    this.videoRef.nativeElement.currentTime = pos * this.videoRef.nativeElement.duration;
  }

  formatTime(time: number): string {
    const h = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    return `${h}:${m}:${s}`;
  }


  toggleFullscreen() {
    const player = this.playerRef.nativeElement;

    if (!document.fullscreenElement) {
      player.requestFullscreen();
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
  }


  closePlayer() {
    window.history.back();
  }
}
