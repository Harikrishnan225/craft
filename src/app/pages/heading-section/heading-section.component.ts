import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';

@Component({
  selector: 'app-heading-section',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent
  ],
  templateUrl: './heading-section.component.html',
  styleUrls: ['./heading-section.component.scss']
})
export class HeadingSectionComponent {

}
