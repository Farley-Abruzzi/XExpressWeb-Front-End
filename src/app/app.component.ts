import { Component } from '@angular/core';
import { AuthService } from './api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XExpress';
  //mostrarMenu: boolean = false;

  // constructor(private auth: AuthService) {
  // }

  // ngOnInit() {
  //   this.auth.mostrarMenuEmitter.subscribe(
  //     mostrar => this.mostrarMenu = mostrar
  //   );
  // }
  
}
