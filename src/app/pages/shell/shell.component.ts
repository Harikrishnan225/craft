import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../heading-section/heading-section.component';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CustInfoComponent } from '../cust-info/cust-info.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    CustInfoComponent,
    HeadingSectionComponent,
    BannerComponent,
    NavbarComponent
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

}
