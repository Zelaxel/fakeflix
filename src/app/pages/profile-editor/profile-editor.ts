import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  imports: [FormsModule],
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.css',
})
export class ProfileEditor {
  private location = inject(Location);
  private firebase = inject(FirebaseService);

  name: string | null = localStorage.getItem('name');

  goBack() {
    this.location.back()
  }

  async changeProfile(newName: string) {
    const uid: string | null = localStorage.getItem('uid');
    console.log(newName);
    if(uid) {
      await this.firebase.updateUserData(uid, newName);
      localStorage.setItem('name', newName);
    }
    this.goBack();
  }
}
