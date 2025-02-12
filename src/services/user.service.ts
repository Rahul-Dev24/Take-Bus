import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment as BaseUrl } from "../../src/environments/environment";
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import * as endPoints from "../common/end-points.json";


@Injectable({
    providedIn: 'root'
})

export class UserService {

    getProfileImg = signal<string>(localStorage.getItem("profileImg") || "");

    constructor(
        private http: HttpClient
    ) { }

    updateUser(user: any): Observable<any> {
        return this.http.put(`${BaseUrl?.BASE_URL}${endPoints.USER.UPDATE_USER}`, user);
    }

    getUser(): Observable<any> {
        return this.http.get(`${BaseUrl?.BASE_URL}${endPoints.USER.GET_USER}`);
    }
}