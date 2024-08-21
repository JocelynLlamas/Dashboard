import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private tokenKey = 'auth-token';
  private openIdTokenKey = 'openid-token';
  private isBrowser!: boolean;

  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // login(username: string, password: string): Observable<boolean> {
  //   return this.http.get<any[]>(`${this.baseUrl}/users?username=${username}&password=${password}`)
  //     .pipe(
  //       map(users => {
  //         console.log(users)
  //         if (users.length > 0 && this.isBrowser) {
  //           // Store tokens in localStorage
  //           localStorage.setItem(this.tokenKey, users[0].token);
  //           localStorage.setItem(this.openIdTokenKey, users[0].openid);
  //           localStorage.setItem('username', users[0].username);
  //           console.log(localStorage.getItem('username'))
  //           return true;
  //         }
  //         return false;
  //       }),
  //       catchError(() => of(false))
  //     );
  // }

  login(username: string, password: string): Observable<{ token: string; username: string }> {
    return this.http.get<any[]>(`${this.baseUrl}/users?username=${username}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          // Simulate a successful login with a token
          return { token: users[0].token, username: users[0].username };
        } else {
          throw new Error('Invalid credentials');
        }
      })
    );
  }

  register(username: string, password: string): Observable<boolean> {
    const newUser = { username, password, token: 'mock-jwt-token', openid: 'mock-openid-token' };
    return this.http.post<any>(`${this.baseUrl}/users`, newUser)
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.openIdTokenKey);
    }
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isBrowser && !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem(this.tokenKey) : null;
  }

  getOpenIdToken(): string | null {
    return this.isBrowser ? localStorage.getItem(this.openIdTokenKey) : null;
  }

  get isUserAutenticated() {
    return this.isBrowser && !!localStorage.getItem(this.tokenKey);
  }

  getUsername(): string | null {
    return this.isBrowser ? localStorage.getItem('username') : null;
  }
}
