export interface Content {
  id: number;
  title: string; // For movies
  name?: string; // For TV shows (optional)
  description?: string; // Optional for custom data
  overview: string; // TMDb uses 'overview' for descriptions
  poster_path: string; // TMDb poster image path
  backdrop_path: string; // TMDb backdrop image path
  genre_ids: number[]; // TMDb genre IDs
  vote_average: number; // TMDb rating
  release_date?: string; // TMDb release date for movies
  first_air_date?: string; // TMDb first air date for TV shows
  popularity?: number; // TMDb popularity score
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