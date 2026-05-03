import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-guest',
  imports: [],
  templateUrl: './homepage-guest.html',
  styleUrl: './homepage-guest.css',
})
export class HomepageGuest {

  private router = inject(Router);

  goToLogin(email: string) {
    localStorage.clear();
    this.router.navigate(['/login'],{
      queryParams: {email: email}
    });
  }

}
