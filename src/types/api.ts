export interface User {
  id: string;
  name: string;
  birthdate: string;
  gender: "M" | "F";
}

export interface Book {
  id: string;
  title: string;
  description: string;
  authors: Array<string>;
  category: BookCategory;
  imageUrl?: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
  pageCount: number;
}

export enum BookCategory {
  BIOGRAPHIES = "Biografias",
  COLLECTIONS = "Coleções",
  BEHAVIOR = "Comportamento",
  TALES = "Contos",
  LITERARY_CRITICISM = "Crítica Literária",
  SCIENCEFICTION = "Ficção Científica",
  FOLKLORE = "Folclore",
  GENEALOGY = "Genealogia",
  HUMOR = "Humor",
  CHILDREN = "Criança",
  GAMES = "Jogos",
  NEWSPAPERS = "Jornais",
  BRAZILIAN_LITERATURE = "Literatura Brasileira",
  FOREIGN_LITERATURE = "Literatura Estrangeira",
  RARE_BOOKS = "Livros Raros",
  MANUSCRIPTS = "Manuscritos",
  POETRY = "Poesia",
  ANOTHER_SUBJECTS = "Outros Assuntos",
}

export type Paginated<T> = {
  data: Array<T>;
  page: number;
  totalItems: number;
  totalPages: number;
};
