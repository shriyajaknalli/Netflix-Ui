import { Component, OnInit } from '@angular/core';
import { Content, ContentCategory } from './models/content.interface';
import { ModalService } from './services/modal.service';
import { ContentService } from './services/content.service'; // Adjust the path as needed
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
  selectedContent: Content | null = null;

  constructor(private contentService: ContentService, private modalService: ModalService) {
     this.modalService.modalState$.subscribe(modalState => {
      this.selectedContent = modalState.content;
   });}


  onCardClick(content: Content) {
    console.log('Content clicked:', content.title);
    this.modalService.openModal(content);
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
  
    this.contentService.getTrendingContent().subscribe((content) => {
      this.trendingContent = content;

       if (content.length > 0) {
        this.featuredContent = content[0]; // Set the first item as the featured content
        console.log('Featured Content Set:', this.featuredContent); // Debugging
      }
      
    // Fetch popular content
    this.contentService.getPopularContent().subscribe((content) => {
      this.popularContent = content;
    });

    // Fetch Netflix Originals
    this.contentService.getNetflixOriginals().subscribe((content) => {
      this.originalContent = content;
    });

  } );

  // private generateSampleContent(count: number): Content[] {
  //   // Generate sample content for testing
  //   const contents: Content[] = [];
  //   for (let i = 1; i <= count; i++) {
  //     contents.push({
  //       id: i,
  //       title: `Title ${i}`,
  //       description: `Description for title ${i}`,
  //       posterUrl: `assets/poster-${i}.jpg`,
  //       backdropUrl: `assets/backdrop-${i}.jpg`,
  //       genre: ["Action", "Drama"],
  //       rating: 7.5 + Math.random() * 2,
  //       year: 2020 + Math.floor(Math.random() * 4),
  //       duration: 90 + Math.floor(Math.random() * 60),
  //       category: Math.random() > 0.5 ? ContentCategory.MOVIE : ContentCategory.SERIES
  //     });
  //   }
  //   return contents;
  // }

}
}