import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {
    this.authService.authenticatedChange.subscribe(() => {
      this.username = this.authService.getUserInfo();
    });
  }

  onLogin() {
    this.authService.login(this.username, this.password);
  }

  onLogout() {
    this.authService.logout();
  }
}
