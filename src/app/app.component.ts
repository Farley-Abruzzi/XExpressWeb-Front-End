import { Component } from '@angular/core';
import { AuthService } from './api/auth.service';
import { Router } from '@angular/router';
import { CredenciaisDTO } from './Xexpress/classe/credenciais.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XExpress';
  currentUser: CredenciaisDTO;
  
    constructor(
      private router: Router,
      private authService: AuthService) {
      this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
  
}
