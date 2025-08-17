import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() cardClicked = new EventEmitter<Content>();

  onCardClick(): void {
    this.cardClicked.emit(this.content);
  }

}
