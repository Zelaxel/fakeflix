import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-user-panel',
  imports: [RouterLink],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.css',
})
export class UserPanel {
  @Output() closePanel = new EventEmitter<void>()

  private router = inject(Router);

  hideUserPanel(): void {
    this.closePanel.emit();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
