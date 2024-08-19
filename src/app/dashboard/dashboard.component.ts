import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardsComponent,
    TablesComponent,
    ChartsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
