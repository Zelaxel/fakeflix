import { Component } from '@angular/core';
import { TitleItem } from '../title-item/title-item';
import { Header } from '../header/header';

@Component({
  selector: 'app-title-grid',
  imports: [TitleItem, Header],
  templateUrl: './title-grid.html',
  styleUrl: './title-grid.css',
})
export class TitleGrid {
  query: string = 'query';
  titlesId: number[] = [
    1, 2, 3, 4, 5, 6
  ];
}
