import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { authReducer } from './app/core/store/auth/auth.reducer';
import { AuthEffects } from './app/core/store/auth/auth.effects';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({ auth: authReducer }),
      EffectsModule.forRoot([AuthEffects])
    ),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ auth: authReducer }), 
    provideEffects(AuthEffects), 
  ]
}).catch(err => console.error(err));
