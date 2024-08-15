import express, { json } from "express";
import { booksRouter } from "./routes/booksRoutes";
import { HandleErrors } from "./errors/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/books", booksRouter);

app.use(HandleErrors.execute);
