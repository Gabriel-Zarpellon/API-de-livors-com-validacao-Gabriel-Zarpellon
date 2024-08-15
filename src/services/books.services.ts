import { booksDatabase, setId } from "../database/database";
import {
  iBook,
  iBooksServices,
  tAddBook,
  tUpdateBook,
} from "../interfaces/books.interface";

export class BooksServices implements iBooksServices {
  addBook(body: tAddBook): iBook {
    const date = new Date();

    const book: iBook = {
      id: setId(),
      name: body.name,
      pages: body.pages,
      category: body.category,
      createdAt: date,
      updatedAt: date,
    };

    booksDatabase.push(book);

    return book;
  }

  getBooks(): iBook[] {
    return booksDatabase;
  }

  getBook(id: string): iBook {
    const book = booksDatabase.find((book) => book.id == Number(id)) as iBook;

    return book;
  }

  updateBook(id: string, body: tUpdateBook): iBook {
    const date = new Date();

    const update = { ...body, updatedAt: date };

    const index = booksDatabase.findIndex((book) => book.id == Number(id));

    const updatedBook = { ...booksDatabase[index], ...update };

    booksDatabase.splice(index, 1, updatedBook);

    return updatedBook;
  }

  deleteBook(id: string): void {
    const index = booksDatabase.findIndex((book) => book.id == Number(id));

    booksDatabase.splice(index, 1);
  }
}
