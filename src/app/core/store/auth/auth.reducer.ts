import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';

export interface AuthState {
    token: string | null;
    username: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

export const initialState: AuthState = {
    token: null,
    username: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(login, (state) => ({
        ...state,
        loading: false,
        error: null
    })),
    on(loginSuccess, (state, { token, username }) => ({
        ...state,
        token,
        username,
        isAuthenticated: true,
        loading: false, // Set loading to false on success
        error: null
    })),
    on(loginFailure, (state, { error }) => ({
        ...state,
        loading: false, // Set loading to false on failure
        error
    })),
    on(logout, () => initialState)
);
