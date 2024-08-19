import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { DataService } from '../../core/services/data.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import {
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective
  ],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chartData!: ChartConfiguration['data'];
  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartType: ChartType = 'line';  // Define the chart type line, pie
  isBrowser!: boolean;

  constructor(private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      // Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);
      Chart.register(LineController, LineElement, PointElement,CategoryScale, LinearScale, Tooltip, Legend);
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.chartData = this.dataService.getChartData();
    }
  }
}
