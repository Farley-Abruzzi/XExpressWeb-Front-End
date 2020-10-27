import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { StorageService } from './storage.service';
//import { JwtHelperService  } from '@auth0/angular-jwt';
import { API_CONFIG } from './api.config';
import { CredenciaisDTO } from '../Xexpress/classe/credenciais.dto';
import { LocalUser } from '../Xexpress/classe/local_user';


@Injectable()
export class AuthService {
  
  //jwtHelperService: JwtHelperService = new JwtHelperService();

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(public http: HttpClient, /*public storage: StorageService*/) {
  }

  authenticate(creds: CredenciaisDTO) {
    return this.http.post(`${API_CONFIG.baseURL}/login`, creds,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  // successfullLogin(authorizationValue: string) {
  //   let tok = authorizationValue.substring(7);
  //   let user: LocalUser = {
  //     token: tok,
  //     email: ''
  //   };
  //   this.storage.setLocalUser(user);
  // }