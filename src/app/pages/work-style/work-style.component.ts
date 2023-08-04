import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-work-style',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './work-style.component.html',
  styleUrls: ['./work-style.component.scss']
})
export class WorkStyleComponent {

}
