import { API_CONFIG } from './api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CredenciaisDTO } from '../Xexpress/classe/credenciais.dto';
import { StorageService } from './storage.services';
import { LocalUser } from '../Xexpress/classe/local_user';


@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<CredenciaisDTO>;
    public currentUser: Observable<CredenciaisDTO>;

    constructor(private http: HttpClient, public storage: StorageService) {
        this.currentUserSubject = new BehaviorSubject<CredenciaisDTO>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): CredenciaisDTO {
        return this.currentUserSubject.value;
    }

    // authenticate(creds: CredenciaisDTO) {
    //     return this.http.post<any>(`${API_CONFIG.baseURL}/login`, creds)
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 //localStorage.setItem('currentUser', JSON.stringify(user));
    //                 this.storage.setLocalUser(user);
    //                 this.currentUserSubject.next(user);
    //             }

    //             return user;
    //         }));
    // }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/login`, creds,
          {
            observe: 'response',
            responseType: 'text'
          });
      }

    successfullLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
          token: tok,
          email: ''
        };
        this.storage.setLocalUser(user);
      }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
        this.storage.setLocalUser(null);
        //this.currentUserSubject.next(null);
    }
}