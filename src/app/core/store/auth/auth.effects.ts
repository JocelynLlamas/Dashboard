import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';  // Import the logout action
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            mergeMap(action =>
                this.authService.login(action.username, action.password).pipe(
                    map(response => loginSuccess({ token: response.token, username: response.username })),
                    catchError(error => of(loginFailure({ error: error.message })))
                )
            )
        )
    );

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginSuccess),
            map(action => {
                localStorage.setItem('auth-token', action.token);
                localStorage.setItem('username', action.username);
                this.router.navigate(['/dashboard']);
            })
        ),
        { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logout),
            map(() => {
                localStorage.removeItem('auth-token');
                localStorage.removeItem('username');
                this.router.navigate(['/login']);
            })
        ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }
}
