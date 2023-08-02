import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeallButtonComponent } from '../seeall-button/seeall-button.component';

@Component({
  selector: 'app-craft-form',
  standalone: true,
  imports: [
    CommonModule,
    SeeallButtonComponent
  ],
  templateUrl: './craft-form.component.html',
  styleUrls: ['./craft-form.component.scss']
})
export class CraftFormComponent {

}
