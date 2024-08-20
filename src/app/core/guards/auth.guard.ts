import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isAuthenticated = this.authService.isAuthenticated();

    // Controlar el acceso basado en la autenticación
    if (isAuthenticated) {
      // Si está autenticado y trata de ir a login o register, redirigir al dashboard
      if (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register') {
        return this.router.parseUrl('/dashboard');
      }
      // De lo contrario, permitir el acceso a la ruta solicitada
      return true;
    } else {
      // Si no está autenticado y trata de acceder al dashboard, redirigir a login
      if (route.routeConfig?.path === 'dashboard') {
        return this.router.parseUrl('/login');
      }
      // Permitir el acceso a las rutas de login y registro si no está autenticado
      return true;
    }
  }
}
