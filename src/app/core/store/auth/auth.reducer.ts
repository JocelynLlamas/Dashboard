import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './auth.actions';

export interface AuthState {
    token: string | null;
    username: string | null;
    isAuthenticated: boolean;
}

export const initialState: AuthState = {
    token: null,
    username: null,
    isAuthenticated: false,
};

export const authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, { token, username }) => ({
        ...state,
        token,
        username,
        isAuthenticated: true,
    })),
    on(logout, () => initialState)
);
