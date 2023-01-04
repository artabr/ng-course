import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginResponse, UserInfoResponse } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = '';
  private token: string = '';
  private fullname: string = '';
  private authenticated: boolean = false;

  authenticatedChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) {
    this.authenticatedChange.subscribe((value) => {
      this.authenticated = value;
    });
  }

  login(username: string, password: string) {
    this.http
      .post<LoginResponse>('https://angularmentoringserver.onrender.com/auth/login', {
        login: username,
        password: password,
      })
      .subscribe((response) => {
        if (response) {
          this.username = username;
          this.token = response.token;
          localStorage?.setItem('username', username);
          localStorage?.setItem('token', response.token);
          this.authenticatedChange.next(true);
          console.log('User logged in.');
          this.router.navigate(['/']);
        }
      });
  }

  logout() {
    this.username = '';
    this.token = '';
    localStorage?.setItem('username', '');
    localStorage?.setItem('token', '');
    this.authenticatedChange.next(false);
    console.log('User logged out.');
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getUserInfo(callback: (fullname: string) => void) {
    this.http
      .post<UserInfoResponse>('https://angularmentoringserver.onrender.com/auth/userinfo', {
        token: this.token,
      })
      .subscribe((response) => {
        if (response) {
          this.fullname = `${response.name.first} ${response.name.last}`;
          callback(this.fullname);
        }
      });
  }
}
