import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content.interface';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {
  @Input() featuredContent!: Content;

  ngOnChanges() {
    console.log('Featured Content:', this.featuredContent); // Debugging
  }

  playContent() {
    console.log('Playing:', this.featuredContent.title || this.featuredContent.name);
    // Add logic to navigate to a player or play the content
  }

  addToList() {
    console.log('Added to list:', this.featuredContent.title || this.featuredContent.name);
    // Add logic to add the content to the user's list
  }
}