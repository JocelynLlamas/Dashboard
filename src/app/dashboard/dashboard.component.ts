import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardsComponent,
    TablesComponent,
    ChartsComponent,
    NavbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
