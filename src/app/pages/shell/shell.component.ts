import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../heading-section/heading-section.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CustInfoComponent } from '../cust-info/cust-info.component';
import { BannerComponent } from '../banner/banner.component';
import { TrendingComponent } from '../trending/trending.component';
import { ExploreCraftComponent } from '../explore-craft/explore-craft.component';
import { ChoicesSectionComponent } from '../choices-section/choices-section.component';
import { TwoImagesComponent } from '../two-images/two-images.component';
import { CraftFormComponent } from '../craft-form/craft-form.component';
import { BulkOrderComponent } from '../bulk-order/bulk-order.component';
import { ExploreCollectionsComponent } from '../explore-collections/explore-collections.component';
import { FooterSectionComponent } from '../footer-section/footer-section.component';
import { FooterComponent } from '../footer/footer.component';
import { HeartResidesComponent } from '../heart-resides/heart-resides.component';
import { MenThingsComponent } from '../men-things/men-things.component';
import { WonderGrowingComponent } from '../wonder-growing/wonder-growing.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    CustInfoComponent,
    HeadingSectionComponent,
    NavbarComponent,
    BannerComponent, 
    TrendingComponent,
    ExploreCraftComponent,
    ChoicesSectionComponent,
    TwoImagesComponent,
    HeartResidesComponent,
    CraftFormComponent,
    MenThingsComponent,
    WonderGrowingComponent,
    BulkOrderComponent,
    ExploreCollectionsComponent,
    FooterSectionComponent,
    FooterComponent
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

}
