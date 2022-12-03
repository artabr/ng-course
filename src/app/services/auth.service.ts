import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = '';
  private password: string = '';
  private authenticated: boolean = false;

  authenticatedChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
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
  }

  logout() {
    this.username = '';
    this.password = '';
    localStorage?.setItem('username', '');
    localStorage?.setItem('password', '');
    this.authenticatedChange.next(false);
    console.log('User logged out.');
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getUserInfo() {
    return this.username;
  }
}
