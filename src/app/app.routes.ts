import { Routes } from '@angular/router';
import { HomePageUpdateComponent } from './Admin/components/home-page-update/home-page-update.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { isLoginGuard } from './guards/isLogin.guard';


export const routes: Routes = [
    {
        path: '', redirectTo: 'user/home', pathMatch: 'full'
    },
    { path: "login", canActivate: [loginGuard], loadComponent: () => import("../components/Login_Components/login/login.component").then((c) => c.LoginComponent) },
    { path: "forgot-password", canActivate: [loginGuard], loadComponent: () => import("../components/Login_Components/foreigt-password/foreigt-password.component").then((c) => c.ForeigtPasswordComponent) },
    { path: "otp-verify", loadComponent: () => import("../components/Login_Components/otp-verify/otp-verify.component").then((c) => c.OtpVerifyComponent) },
    { path: "register", canActivate: [loginGuard], loadComponent: () => import("../components/Login_Components/register/register.component").then((c) => c.RegisterComponent) },
    { path: "profile", canActivate: [isLoginGuard], loadComponent: () => import("../components/profile/profile.component").then((c) => c.ProfileComponent) },
    { path: "work-area", canActivate: [isLoginGuard], loadComponent: () => import("../app/work-area/work-area.component").then((c) => c.WorkAreaComponent) },
    {
        path: 'user', children: [
            { path: 'home', loadComponent: () => import("./Users/pages/home-page/home-page.component").then((c) => c.HomePageComponent) },
            { path: 'booking', loadComponent: () => import("./Users/pages/booking-page/booking-page.component").then((c) => c.BookingPageComponent) },
            { path: 'check-out', loadComponent: () => import("./Users/pages/checkout-page/checkout-page.component").then((c) => c.CheckoutPageComponent), canActivate: [isLoginGuard] }
        ]
    },
    {
        path: 'partner', children: [
            { path: 'new-booking', canActivate: [isLoginGuard], loadComponent: () => import("../app/Partner/pages/new-booking/new-booking.component").then((c) => c.NewBookingComponent) },
        ]
    },
    {
        path: 'admin', children: [
            { path: 'home', component: HomePageUpdateComponent, canActivate: [authGuard] },
            { path: 'updateHomePage', canActivate: [authGuard], loadComponent: () => import("./Admin/components/home-page-update/home-page-update.component").then((c) => c.HomePageUpdateComponent) },
            { path: 'category', canActivate: [authGuard], loadComponent: () => import("./Admin/pages/category/category.component").then((c) => c.CategoryComponent) }
        ]
    }

];
