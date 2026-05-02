import { Component, inject, signal } from '@angular/core';
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
export class TitleGrid {
  private fb = inject(FirebaseService);

  query: string = 'query';
  titles = signal<Title[]>([]);

  ngOnInit() {
    this.loadTitles();
  }

  loadTitles() {
    this.fb.getTitles().subscribe({
      next: (data) => {
        console.log('Titles loaded correctly');
        this.titles.set(data);
      },
      error: (err) => console.error('Failed to load titles: ', err),
    });
  }
}
