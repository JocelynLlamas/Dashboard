import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { loginSuccess } from '../store/auth/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthInitializerService {
    constructor(private store: Store) { }

    loadAuthState() {
        const token = localStorage.getItem('auth-token');
        const username = localStorage.getItem('username');
        if (token && username) {
            this.store.dispatch(loginSuccess({ token, username }));
        }
        return of(true).pipe(map(() => true)); // Simulate an observable for APP_INITIALIZER
    }
}
