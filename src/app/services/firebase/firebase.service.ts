import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Title } from '../../models/title';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore = inject(Firestore);

  getTitles() {
    const titlesCollection = collection(this.firestore, "titles");
    return collectionData(titlesCollection, {idField: "id"}) as Observable<Title[]>;
  }
}
