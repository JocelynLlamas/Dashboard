import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private tokenKey = 'auth-token';
  private openIdTokenKey = 'openid-token';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseUrl}/users?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          console.log(users)
          if (users.length > 0) {
            // Store tokens in localStorage
            localStorage.setItem(this.tokenKey, users[0].token);
            localStorage.setItem(this.openIdTokenKey, users[0].openid);
            return true;
          }
          return false;
        }),
        catchError(() => of(false))
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
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.openIdTokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getOpenIdToken(): string | null {
    return localStorage.getItem(this.openIdTokenKey);
  }
}
