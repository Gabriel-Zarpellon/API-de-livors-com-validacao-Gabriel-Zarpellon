import { z } from "zod";

export const bookSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  pages: z.number().min(1),
  category: z.optional(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const addBookBodySchema = bookSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateBookBodySchema = bookSchema.omit({ id: true, createdAt: true, updatedAt: true }).partial();
