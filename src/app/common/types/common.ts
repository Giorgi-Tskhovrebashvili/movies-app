export interface ButtonType {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
  type?: "submit" | undefined;
}

export interface MainLayoutType {
  children: React.ReactNode;
}

export interface InputType {
  className: string;
  type: "search" | "email" | "password";
  placeholder: string;
  value?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MovieImages {
  small: string;
  medium: string;
  large: string;
}

export interface MovieInfo {
  id: number;
  title: string;
  categoryIcon: string;
  image: MovieImages;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface RecomendedTypes {
  movieData: MovieInfo[];
  onClick?: () => void;
}

export interface TrendingMovie {
  trend: MovieInfo[];
  onClick?: () => void;
}

export interface SearchType {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BookmarkType {
  movies: MovieInfo[];
  category: "Movie" | "TV Series";
  title: string;
  onClick?: () => void;
}

export interface IconType {
  fill: string;
  className: string;
}
