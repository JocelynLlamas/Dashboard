import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsername, selectIsAuthenticated } from '../core/store/auth/auth.selectors';
import { logout } from '../core/store/auth/auth.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardsComponent,
    TablesComponent,
    ChartsComponent,
    NavbarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  username$: Observable<string | null>;
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store) {
    this.username$ = this.store.pipe(select(selectUsername));
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }
}
