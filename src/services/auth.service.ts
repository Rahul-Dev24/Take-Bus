import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { AlertService } from './alert.service';
import { environment as BaseUrl } from "../../src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private readonly cookieService: CookieService,
        private readonly alertService: AlertService
    ) {

    }

    authToken = "token";
    token = signal(this.cookieService.get(this.authToken));
    role = signal(localStorage.getItem("role") || 'user');
    userId = signal(localStorage.getItem("user") || '');
    permission = signal(localStorage.getItem("permission") || '');

    regesterUser(user: User, userType: string = 'user'): Observable<any> {
        return this.http.post(`${BaseUrl?.BASE_URL}/signup/${userType}`, user);
    }

    loginUser(email: string, password: string): Observable<any> {
        return this.http.post(`${BaseUrl?.BASE_URL}/login`, { email, password });
    }

    otpVerify(otp: number, userId: string): Observable<any> {
        return this.http.post(`${BaseUrl?.BASE_URL}/verifyOtp`, { otp, userId });
    }

    async setCookie(token: string) {
        this.cookieService.set(this.authToken, token);
        const user: any = this.deCriptToken(token);
        await localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("role", user['role'] as string);
        localStorage.setItem("userId", user['id'] as string);
        localStorage.setItem("permission", user['permission'] as string);
        this.role.set(user['role'] as string);
        this.userId.set(user['id'] as string);
        this.permission.set(user['permission'] as string);
    }

    deCriptToken(token: string) {
        return jwtDecode(token);
    }

    isLoggedIn$ = computed<boolean>(() => {
        const localUser = localStorage.getItem("user");
        this.userId();
        if (!localUser) return false;
        const userObj = localUser ? JSON.parse(localUser) : {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        if (userObj.exp < currentTime) {
            this.alertService.showInfo("Token Expired.");
            this.logout();
            return false;
        }
        return true;
    })

    logout(): void {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("userId");
        localStorage.removeItem("permission");
        localStorage.removeItem("profileImg");
        this.token.set('');
        this.role.set('user');
        this.userId.set('');
        this.permission.set('');
        this.cookieService.delete(this.authToken, '/'); // Delete the cookie
    }
}


interface User {
    name: string,
    email: string,
    password: string,
    phoneNo: string
}
