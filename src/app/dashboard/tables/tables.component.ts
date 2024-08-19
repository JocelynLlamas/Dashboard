import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { TableData } from '../../core/models/table-data.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports:[
    CommonModule 
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  tableData: TableData[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  this.tableData = this.dataService.getTableData();
  }
}
