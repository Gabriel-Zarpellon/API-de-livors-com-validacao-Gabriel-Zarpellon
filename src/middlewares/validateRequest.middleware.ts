import { NextFunction, Request, Response } from "express";
import { iRequestSchemas } from "../interfaces/books.interface";

export class ValidateRequest {
  static execute(schemas: iRequestSchemas) {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (schemas.params) {
        req.params = await schemas.params.parseAsync(req.params);
      } else if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      } else if (schemas.query) {
        req.query = await schemas.query.parseAsync(req.query);
      }

      next();
    };
  }
}
