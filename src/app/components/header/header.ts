import { Component, ElementRef, inject, viewChild, ViewChild } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { UserPanel } from '../user-panel/user-panel';
import { query } from 'firebase/firestore';

@Component({
  selector: 'app-header',
  imports: [RouterLink, UserPanel],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  userPanelVisible: boolean = false;

  router = inject(Router);

  @ViewChild('search-text') input!: ElementRef<HTMLInputElement>;

  showUserPanel(): void {
    this.userPanelVisible = true;
  }
  hideUserPanel(): void {
    this.userPanelVisible = false;
  }

  search(value: string) {
    if (value !== '') {
      this.router.navigate(['/titles'], {
        queryParams: {query: value, showing: value}
      });
    }
  }
}
