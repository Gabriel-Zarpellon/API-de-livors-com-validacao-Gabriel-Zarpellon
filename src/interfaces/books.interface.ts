import { Request, Response } from "express";

export interface iBook {
  id: number;
  name: string;
  pages: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type tAddBook = Pick<iBook, "name" | "pages" | "category">;
export type tUpdateBook = Partial<tAddBook>;

export interface iBooksServices {
  addBook(body: tAddBook): iBook;
  getBooks(): iBook[];
  getBook(id: string): iBook;
  updateBook(id: string, body: tUpdateBook): iBook;
  deleteBook(id: string): void;
}

export interface iBooksControllers {
  addBook(req: Request, res: Response): Response;
  getBooks(req: Request, res: Response): Response;
  getBook(req: Request, res: Response): Response;
  updateBook(req: Request, res: Response): Response;
  deleteBook(req: Request, res: Response): Response;
}
