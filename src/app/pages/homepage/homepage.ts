import { Component, inject, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Title } from '../../models/title';
import { RouterLink } from '@angular/router';
import { TitleItem } from '../../components/title-item/title-item';

@Component({
  selector: 'app-homepage',
  imports: [Header, RouterLink, TitleItem],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  private fb = inject(FirebaseService);
  featuredTitle = signal<Title | null>(null);
  popularTitles = signal<Title[]>([]);

  ngOnInit() {
    this.loadTitles();
  }

  private loadTitles() {
    this.fb.getFeaturedTitle().subscribe({
      next: (data) => {
        console.log('Featured title loaded correctly');
        this.featuredTitle.set(data);
      },
      error: (err) => console.error('Failed to load featured title: ', err),
    });

    this.fb.getPopularTitles().subscribe({
      next: (data) => {
        console.log('Featured title loaded correctly');
        this.popularTitles.set(data);
      },
      error: (err) => console.error('Failed to load popular titles: ', err),
    });
  }
}
