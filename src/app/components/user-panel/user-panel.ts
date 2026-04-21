import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-panel',
  imports: [],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.css',
})
export class UserPanel {
  @Output() closePanel = new EventEmitter<void>()

  hideUserPanel(): void {
    this.closePanel.emit();
  }
}
