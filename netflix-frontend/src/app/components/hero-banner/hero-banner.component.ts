import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content.interface';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {
    @Input() featuredContent!: Content;

    playContent() {
    console.log('Playing:', this.featuredContent.title);
  }

    addToList() {
    console.log('Added to list:', this.featuredContent.title);
  }

}
