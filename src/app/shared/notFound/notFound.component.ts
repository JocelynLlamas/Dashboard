import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notFound',
  standalone: true,
  imports: [],
  templateUrl: './notFound.component.html',
  styleUrl: './notFound.component.scss'
})
export class NotFoundComponent {

  constructor(public auth: AuthService, private router: Router){
    
  }
}
