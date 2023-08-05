import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';
import data from '../../../assets/db.json';

@Component({
  selector: 'app-choices-section',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './choices-section.component.html',
  styleUrls: ['./choices-section.component.scss']
})
export class ChoicesSectionComponent {
data = data;
}
