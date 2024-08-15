import { iBook } from "../interfaces/books.interface";

export const booksDatabase: iBook[] = [];

let id = 0;

export function setId() {
  id++;
  return id;
}
