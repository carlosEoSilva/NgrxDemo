import { createReducer } from "@ngrx/store";
import { Book } from "./book";

export const initialState: ReadonlyArray<Book>= [
    {
        "id": 1,
        "title": "Harry Pother and the Philosopher's stone",
        "author": "J.K. Rowling",
        "cost": 300
      }
];

export const bookReducer= createReducer(
    initialState
)