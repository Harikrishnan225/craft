import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-wonder-growing',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './wonder-growing.component.html',
  styleUrls: ['./wonder-growing.component.scss']
})
export class WonderGrowingComponent {

}
