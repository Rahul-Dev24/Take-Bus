import { effect, Inject, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let role = authService.role();
  let isLogin = authService.isLoggedIn$();
  effect(() => {
    role = authService.role();
    isLogin = authService.isLoggedIn$();
  })
  if (isLogin) {
    if (role == 'user') {
      router.navigate(['/user/home']);
      return false;
    }
    return true;
  }
  return false;
};
