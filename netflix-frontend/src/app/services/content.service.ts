// services/content.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie } from '../models/movie.interface'; 
import { Content, ContentCategory } from '../models/content.interface';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

 private mockContent: Content[] = [
    {
      id: 1,
      title: 'Stranger Things',
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.',
      posterUrl: 'https://via.placeholder.com/300x450/e50914/ffffff?text=Stranger+Things',
      backdropUrl: 'https://via.placeholder.com/1280x720/141414/ffffff?text=Stranger+Things+BG',
      genre: ['Sci-Fi', 'Horror'],
      rating: 8.7,
      year: 2016,
      duration: 50,
      category: ContentCategory.SERIES,
      isFeatured: true
    },
    {
      id: 2,
      title: 'The Crown',
      description: 'A biographical drama about the reign of Queen Elizabeth II.',
      posterUrl: 'https://via.placeholder.com/300x450/b8860b/ffffff?text=The+Crown',
      backdropUrl: 'https://via.placeholder.com/1280x720/141414/ffffff?text=The+Crown+BG',
      genre: ['Drama', 'History'],
      rating: 8.6,
      year: 2016,
      duration: 60,
      category: ContentCategory.SERIES
    }
  ];

   private trendingContent$ = new BehaviorSubject<Content[]>(this.mockContent);

  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

    getTrendingContent(): Observable<Content[]> {
    return this.trendingContent$.asObservable();
  }

  getFeaturedContent(): Observable<Content | null> {
    const featured = this.mockContent.find(c => c.isFeatured) || null;
    return new BehaviorSubject(featured).asObservable();
  }
}