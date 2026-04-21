import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UserPanel } from '../user-panel/user-panel';

@Component({
  selector: 'app-header',
  imports: [RouterLink, UserPanel],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  userPanelVisible: boolean = false;

  showUserPanel(): void {
    this.userPanelVisible = true;
  }
  hideUserPanel(): void {
    this.userPanelVisible = false;
  }
}
