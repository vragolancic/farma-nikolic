import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';

@Component({
  selector: 'app-frontend',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.css'
})
export class FrontendComponent {

}
