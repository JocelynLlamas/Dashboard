import { Injectable } from '@angular/core';
import { CardData } from '../models/card-data.interface';
import { TableData } from '../models/table-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCardData(): CardData[] {
    return [
      { title: 'Users', value: 1500, icon: 'fa-users' },
      { title: 'Sales', value: 3200, icon: 'fa-dollar-sign' },
      { title: 'Performance', value: '85%', icon: 'fa-chart-line' }
    ];
  }

  getTableData(): TableData[] {
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', age: 28 },
      { id: 3, name: 'Sam Smith', email: 'sam@example.com', age: 22 }
    ];
  }

  getChartData() {
    return {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Sales',
          data: [100, 200, 300, 400],
          backgroundColor: '#007bff'
        }
      ]
    };
  }
}
