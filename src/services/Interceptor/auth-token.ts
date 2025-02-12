import {
    HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const skipUrls = ['api.cloudinary.com'];

    if (skipUrls.some(url => req.url.includes(url))) {
        return next(req); // Forward request without modifying
    }

    const token = inject(CookieService).get("token");

    const clonedReq = token
        ? req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        })
        : req;

    return next(clonedReq);
};

