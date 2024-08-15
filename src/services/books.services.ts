import { booksDatabase, setId } from "../database/database";
import {
  iBooksServices,
  tAddBook,
  tBook,
  tUpdateBook,
} from "../interfaces/books.interface";

export class BooksServices implements iBooksServices {
  addBook(body: tAddBook): tBook {
    const date = new Date();

    const book: tBook = {
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

  getBooks(search?: string): tBook[] {
    if (search) {
      const bookList = booksDatabase.filter((book) =>
        book.name.toLowerCase().includes(search?.toLowerCase())
      );
      return bookList;
    } else {
      return booksDatabase;
    }
  }

  getBook(id: string): tBook {
    const book = booksDatabase.find((book) => book.id == Number(id)) as tBook;

    return book;
  }

  updateBook(id: string, body: tUpdateBook): tBook {
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
