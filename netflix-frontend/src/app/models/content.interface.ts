export interface Content {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  genre: string[];
  rating: number;
  year: number;
  duration: number;
  category: ContentCategory;
  isFeatured?: boolean;
}

export enum ContentCategory {
  MOVIE = 'movie',
  SERIES = 'series',
  DOCUMENTARY = 'documentary'
}

export interface ContentRow {
  title: string;
  contents: Content[];
  category?: string;
}