import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { addBookBodySchema, updateBookBodySchema} from "../schemas/books.schema";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", ValidateRequest.execute({body: addBookBodySchema}), IsBookNameValid.execute, booksControllers.addBook);
booksRouter.get("/", booksControllers.getBooks);
booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getBook);
booksRouter.patch("/:id", IsBookIdValid.execute, ValidateRequest.execute({body: updateBookBodySchema}), IsBookNameValid.execute, booksControllers.updateBook);
booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.deleteBook);
