import { CanActivateFn, Router, UrlTree} from '@angular/router';
import { inject, Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const router = inject(Router);
  return (localStorage.getItem('isLoggedIn') === 'true')? true : router.parseUrl('/'); // No esta logeado lo devuelve al inicio.
}
