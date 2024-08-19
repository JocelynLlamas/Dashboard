import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CardData } from '../../core/models/card-data.interface';  // Import the interface
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports:[
    CommonModule
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardData: CardData[] = [];  // Apply the interface type

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cardData = this.dataService.getCardData();
  }
}
