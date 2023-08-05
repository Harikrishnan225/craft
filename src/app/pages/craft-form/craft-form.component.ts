import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import data from '../../../assets/db.json'

@Component({
  selector: 'app-craft-form',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './craft-form.component.html',
  styleUrls: ['./craft-form.component.scss']
})
export class CraftFormComponent {
data = data;
}
