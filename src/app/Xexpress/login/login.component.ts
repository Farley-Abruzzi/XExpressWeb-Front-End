import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from '../classe/credenciais.dto';
import { AuthService } from '../../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  creds: CredenciaisDTO = {
    email: '',
    password: ''
  };

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }


  login() {
    this.auth.authenticate(this.creds)
      .subscribe(resp => {
        this.auth.successfullLogin(resp.headers.get('Authorization'));
        this.router.navigate(['/home']);
        alert('Login realizado!');
      },
      error => {alert('Login ou senha inválidos')});
  }

}

