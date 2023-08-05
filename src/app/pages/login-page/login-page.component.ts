import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from '../footer-section/footer-section.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FooterSectionComponent, FooterComponent, NavbarComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

}
