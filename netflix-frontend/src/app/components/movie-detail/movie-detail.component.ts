import { Component, Input } from '@angular/core';
import { Content } from '../../models/content.interface'; // Adjust the path as needed
import { ModalService } from 'src/app/services/modal.service';
import { ContentService } from 'src/app/services/content.service'; // Adjust the path as needed

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  @Input() content!: Content;
  similarMovies: Content[] = []; // This should be populated with similar movies data

  constructor(private modalService: ModalService,
    private contentService: ContentService
  ) { }

  closeModal() {
    this.modalService.closeModal();
  }

  playContent() {
    console.log('Playing:', this.content.title);
  }

  addToList() {
    console.log('Added to list:', this.content.title);
  }

onCardClick(movie: Content) {
    this.modalService.openModal(movie);
  }

}
