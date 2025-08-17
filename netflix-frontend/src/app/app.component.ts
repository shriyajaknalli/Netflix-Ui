import { Component, OnInit } from '@angular/core';
import { Content, ContentCategory } from './models/content.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  featuredContent!: Content;
  trendingContent: Content[] = [];
  popularContent: Content[] = [];
  originalContent: Content[] = [];

  onCardClick(content: Content) {
    console.log('Content clicked:', content.title);
    // TODO: Open detail modal in Phase 2.2
  }

   onPlayContent(content: Content) {
    console.log('Playing content:', content.title);
    // TODO: Navigate to player in Phase 3
  }

   onAddToList(content: Content) {
    console.log('Added to list:', content.title);
    // TODO: Add to user's list functionality
  }

  ngOnInit() {
    this.loadContent();
  }

  private loadContent() {
    // Featured content
    this.featuredContent = {
      id: 1,
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      posterUrl: "https://via.placeholder.com/300x450/141414/ffffff?text=Stranger+Things",
      backdropUrl: "https://via.placeholder.com/1280x720/141414/e50914?text=Stranger+Things+Backdrop",
      genre: ["Drama", "Fantasy", "Horror"],
      rating: 8.7,
      year: 2016,
      duration: 51,
      category: ContentCategory.SERIES,
      isFeatured: true
    };

    // Sample content arrays
    this.trendingContent = this.generateSampleContent(10);
    this.popularContent = this.generateSampleContent(10);
    this.originalContent = this.generateSampleContent(10);
  }

  private generateSampleContent(count: number): Content[] {
    // Generate sample content for testing
    const contents: Content[] = [];
    for (let i = 1; i <= count; i++) {
      contents.push({
        id: i,
        title: `Title ${i}`,
        description: `Description for title ${i}`,
        posterUrl: `assets/poster-${i}.jpg`,
        backdropUrl: `assets/backdrop-${i}.jpg`,
        genre: ["Action", "Drama"],
        rating: 7.5 + Math.random() * 2,
        year: 2020 + Math.floor(Math.random() * 4),
        duration: 90 + Math.floor(Math.random() * 60),
        category: Math.random() > 0.5 ? ContentCategory.MOVIE : ContentCategory.SERIES
      });
    }
    return contents;
  }

}