import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import data from '../../../assets/db.json';

@Component({
  selector: 'app-heart-resides',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './heart-resides.component.html',
  styleUrls: ['./heart-resides.component.scss']
})
export class HeartResidesComponent {
data = data;
}
