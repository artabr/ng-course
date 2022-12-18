import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = '';
  private password: string = '';
  private authenticated: boolean = false;

  authenticatedChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) {
    this.authenticatedChange.subscribe((value) => {
      this.authenticated = value;
    });
  }

  login(username: string, password: string) {
    this.username = username;
    this.password = password;
    localStorage?.setItem('username', username);
    localStorage?.setItem('password', password);
    this.authenticatedChange.next(true);
    console.log('User logged in.');
    this.router.navigate(['/']);
  }

  logout() {
    this.username = '';
    this.password = '';
    localStorage?.setItem('username', '');
    localStorage?.setItem('password', '');
    this.authenticatedChange.next(false);
    console.log('User logged out.');
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getUserInfo() {
    return this.username;
  }
}
