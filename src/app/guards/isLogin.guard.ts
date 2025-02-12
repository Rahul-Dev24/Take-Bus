import { effect, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";


export const isLoginGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    let isLogin = authService.isLoggedIn$();
    effect(() => {
        isLogin = authService.isLoggedIn$();
    })
    if (isLogin) return true;
    router.navigate(['/login']);
    return false;
}
