import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  limit,
  query,
  where,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Title } from '../../models/title';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore = inject(Firestore);

  getTitles() {
    const titlesCollection = collection(this.firestore, 'titles');
    return collectionData(titlesCollection, { idField: 'id' }) as Observable<Title[]>;
  }

  getPopularTitles() {
    const titlesCollection = collection(this.firestore, 'titles');
    const q = query(titlesCollection, where('popular', '==', true));
    return collectionData(q, { idField: 'id' }) as Observable<Title[]>;
  }

  getFeaturedTitle() {
    const titlesCollection = collection(this.firestore, 'titles');
    const q = query(titlesCollection, where('featured', '==', true), limit(1));
    return collectionData(q, { idField: 'id' }).pipe(
      map(titles => titles.length > 0 ?(titles as Title[])[0] : null)
    );
  }
}
