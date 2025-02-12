import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private readonly http: HttpClient
    ) { }

    getCategory(): Observable<any> {
        return this.http.get(`${environment.BASE_URL}/admin/getCategory`);
    }

    updateCategory(id: string, data: any): Observable<any> {
        return this.http.put(`${environment.BASE_URL}/admin/updateCategory/${id}`, data);
    }

    createCategory(data: any): Observable<any> {
        return this.http.post(`${environment?.BASE_URL}/admin/createCategory`, data);
    }

    deleteCategory(id: string): Observable<any> {
        return this.http.delete(`${environment.BASE_URL}/admin/deleteCategory/${id}`);
    }
}