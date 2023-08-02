import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  
}
