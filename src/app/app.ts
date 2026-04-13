import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleItem } from './components/title-item/title-item'
import { Header } from './components/header/header'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleItem, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('fakeflix');
}
