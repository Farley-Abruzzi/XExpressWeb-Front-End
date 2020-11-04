import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from '../classe/credenciais.dto';
import { AuthService } from '../../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

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

  returnUrl: string;

  constructor(public authService: AuthService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {
    console.log(this.creds);

    this.authService.authenticate(this.creds)
      .subscribe(data => {
        this.authService.successfullLogin(data.headers.get('Authorization'));
        this.router.navigate(['/home']);
        alert('Login realizado!');
      },
        error => {
          console.log(error);
          alert('Login ou senha inválidos')
        });
  }


}

