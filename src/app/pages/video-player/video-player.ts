import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css',
})
export class VideoPlayer {
  /* ========================
     🎬 REFERENCIAS DOM
  ======================== */
  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('player') playerRef!: ElementRef;

  /* ========================
     📦 ESTADO
  ======================== */
  video: string = 'video.mp4';
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

  constructor(private router: Router) {}

  /* ========================
     Funcion de play and pause
  ======================== */
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

  /* ========================
     Controles de forward y rewind
  ======================== */
  rewind() {
    const video = this.videoRef.nativeElement;
    video.currentTime -= 10;
  }

  forward() {
    const video = this.videoRef.nativeElement;
    video.currentTime += 10;
  }

  /* ========================
     Logica del volumen
  ======================== */
  changeVolume(videoEl?: HTMLVideoElement) {
    const video = videoEl || this.videoRef.nativeElement;
    video.volume = this.volume;
  }

  toggleAudioMenu() {
    this.showAudioMenu = !this.showAudioMenu;
  }

  /* ========================
     logica de los subtitulos
  ======================== */
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

  /* ========================
     📊 PROGRESO
  ======================== */
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

    const video = this.videoRef.nativeElement;
    video.currentTime = pos * video.duration;
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

  /* ========================
     🖥️ FULLSCREEN
  ======================== */
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

  /* ========================
     ❌ CERRAR
  ======================== */
  closePlayer() {
    window.history.back();
  }
}
