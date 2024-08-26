import { tBook } from "../interfaces/books.interface";

export const booksDatabase: tBook[] = [];

let id = 0;

export function setId() {
  id++;
  return id;
}
