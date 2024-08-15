import { Request, Response } from "express";
import { AnyZodObject, z } from "zod";
import {
  addBookBodySchema,
  bookSchema,
  updateBookBodySchema,
} from "../schemas/books.schema";

export type tBook = z.infer<typeof bookSchema>;

export type tAddBook = z.infer<typeof addBookBodySchema>;

export type tUpdateBook = z.infer<typeof updateBookBodySchema>;

export interface iBooksServices {
  addBook(body: tAddBook): tBook;
  getBooks(search?: string): tBook[];
  getBook(id: string): tBook;
  updateBook(id: string, body: tUpdateBook): tBook;
  deleteBook(id: string): void;
}

export interface iBooksControllers {
  addBook(req: Request, res: Response): Response;
  getBooks(req: Request, res: Response): Response;
  getBook(req: Request, res: Response): Response;
  updateBook(req: Request, res: Response): Response;
  deleteBook(req: Request, res: Response): Response;
}

export interface iRequestSchemas {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}
