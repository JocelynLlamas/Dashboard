import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState | undefined) => state ? state.loading : false
);

export const selectUsername = createSelector(
  selectAuthState,
  (state: AuthState) => state.username
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state ? state.loading : false
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState | undefined) => state ? state.error : null 
);