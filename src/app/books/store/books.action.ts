import { createAction, props } from "@ngrx/store";
import { Book } from "./book.interface";

export const invokeBooksApi= createAction(
    "[Books API] invoke books Fetch API"
)

export const booksFetchApiSuccess= createAction(
    "[Books API] books fetch api success",
    props<{ allBooks:Book[] }>()
)