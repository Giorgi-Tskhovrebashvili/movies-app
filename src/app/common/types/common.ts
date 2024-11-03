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

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

export interface MovieData {
  results: Movie[];
}
