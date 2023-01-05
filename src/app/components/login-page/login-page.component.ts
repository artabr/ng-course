import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  username: string = 'Morales';
  password: string = 'id';

  constructor(private authService: AuthService) {}

  onLoginClick() {
    this.authService.login(this.username, this.password);
  }
}
