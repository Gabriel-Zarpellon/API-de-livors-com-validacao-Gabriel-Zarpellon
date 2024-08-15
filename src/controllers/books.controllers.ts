import { Request, Response } from "express";
import { iBooksControllers } from "../interfaces/books.interface";
import { BooksServices } from "../services/books.services";

export class BooksControllers implements iBooksControllers {
  addBook(req: Request, res: Response): Response {
    const bookServices = new BooksServices();

    const newBook = bookServices.addBook(req.body);

    return res.status(201).json(newBook);
  }

  getBooks(req: Request, res: Response): Response {
    const search = req.query.search;
    const bookServices = new BooksServices();

    const response = bookServices.getBooks(search as string);

    return res.status(200).json(response);
  }

  getBook(req: Request, res: Response): Response {
    const bookServices = new BooksServices();

    const book = bookServices.getBook(req.params.id);

    return res.status(200).json(book);
  }

  updateBook(req: Request, res: Response): Response {
    const bookServices = new BooksServices();

    const updatedBook = bookServices.updateBook(req.params.id, req.body);

    return res.status(200).json(updatedBook);
  }

  deleteBook(req: Request, res: Response): Response {
    const bookServices = new BooksServices();

    bookServices.deleteBook(req.params.id);

    return res.status(204).json();
  }
}
