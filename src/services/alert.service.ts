import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private alert = new BehaviorSubject<Alert>({
        message: '',
        type: ''
    })
    currentMessage$: Observable<Alert> = this.alert.asObservable();


    showSuccess(message: string) {
        this.alert.next({ message, type: 'success' });
    }

    showInfo(message: string) {
        this.alert.next({ message, type: 'warning' });
    }
    showError(error: HttpErrorResponse) {

        if (error?.status === 500) {
            this.alert.next({ message: error?.error?.message, type: 'error' })
            return;
        }
        this.showInfo(error?.error?.message);
    }

    closeToast() {
        this.alert.next({
            message: '',
            type: ''
        })
    }
}

interface Alert {
    message: string,
    type: string
}