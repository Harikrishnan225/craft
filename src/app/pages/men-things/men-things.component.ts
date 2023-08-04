import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-men-things',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './men-things.component.html',
  styleUrls: ['./men-things.component.scss']
})
export class MenThingsComponent {

}
