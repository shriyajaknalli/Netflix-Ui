import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
// Import the Movie type or interface
import { Movie } from '../../models/movie.interface'; // Adjust the path as needed
import { Content } from '../../models/content.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() content!: Content;
  @Input() size: 'small' |'medium' | 'large' = 'medium'; 
  @Output() cardClicked = new EventEmitter<Content>();
  @Output() playClicked = new EventEmitter<Content>();
  @Output() addToListClicked = new EventEmitter<Content>();

  isHovered = false;
  imageLoaded = false;
  imageError = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

  onCardClick(): void {
    this.cardClicked.emit(this.content);
  }
  onPlayClick(event: Event) {
    event.stopPropagation();
    this.playClicked.emit(this.content);
  }

    onAddToListClick(event: Event) {
    event.stopPropagation();
    this.addToListClicked.emit(this.content);
  }

   onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError() {
    this.imageError = true;
    this.imageLoaded = false;
  }

  //  getFormattedRating(): string {
  //   return this.content.vote_average.toFixed(1);
  // }

  //  getGenreString(): string {
  //   return this.content.genre_ids.slice(0, 2).join(' • ');
  // }
}