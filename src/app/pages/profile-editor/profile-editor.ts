import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-editor',
  imports: [],
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.css',
})
export class ProfileEditor {
  private location = inject(Location);

  goBack() {
    this.location.back()
  }

  changeProfile() {
    this.goBack()
  }
}
