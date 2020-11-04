import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/api/auth.service';
import { StorageService } from '../api/storage.services';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService,
        private storage: StorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
        const currentUser = this.storage.getLocalUser();
        if (currentUser) {
            // logged in so return true
            console.log('CurrentUser: ', currentUser);
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']/*{ queryParams: { returnUrl: state.url } }*/);
        return false;
    }

    
}