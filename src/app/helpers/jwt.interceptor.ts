import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';
import { API_CONFIG } from '../api/api.config';
import { StorageService } from '../api/storage.services';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private storage: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.storage.getLocalUser();
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(API_CONFIG.baseURL);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}