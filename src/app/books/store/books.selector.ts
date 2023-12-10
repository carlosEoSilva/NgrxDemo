import { createFeatureSelector } from "@ngrx/store";
import { Book } from "./book.interface";

export const selectBooks= createFeatureSelector<Book[]>("mybooks");