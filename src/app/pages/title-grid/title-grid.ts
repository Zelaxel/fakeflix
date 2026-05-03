import { Component, inject, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { TitleItem } from '../../components/title-item/title-item';
import { Header } from '../../components/header/header';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Title } from '../../models/title';

@Component({
  selector: 'app-title-grid',
  imports: [TitleItem, Header],
  templateUrl: './title-grid.html',
  styleUrl: './title-grid.css',
})
export class TitleGrid implements OnChanges {
  private fb = inject(FirebaseService);

  @Input() query?: string;
  @Input() type?: number;
  @Input() recent?: boolean;
  @Input() showing: string = '';
  titles = signal<Title[]>([]);

  ngOnInit() {
    this.loadTitles();
  }

  ngOnChanges(): void {
    this.loadTitles()
  }

  loadTitles() {
    this.fb.getTitlesByQuery(this.query, this.type, this.recent).subscribe({
      next: (data) => {
        console.log(data);
        this.titles.set(data);
      },
      error: (err) => { console.error("Error fetching titles.", err)}
    })
  }
}
