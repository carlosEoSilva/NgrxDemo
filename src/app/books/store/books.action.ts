import { createAction, props } from "@ngrx/store";
import { Book } from "./book.class";

export const invokeBooksApi= createAction(
    "[Books API] invoke books Fetch API"
);

export const booksFetchApiSuccess= createAction(
    "[Books API] books fetch api success",
    props<{ allBooks:Book[] }>()
);

export const invokeSaveBookApi= createAction(
    "[Books API] invoke save book API",
    props<{ newBook:Book }>()
);

export const saveBookApiSuccess= createAction(
    "[Books API] save book API success",
    props<{ response:Book }>()
);

export const invokeUpdateBookApi= createAction(
    "[Books API] invoke update book API",
    props<{ updatedBook:Book }>()
);

export const updateBookSuccess= createAction(
    "[Books API] update book API success",
    props<{ updatedBook:Book }>()
);

export const invokeDeleteBookApi= createAction(
    "[Books API] invoke delete book API",
    props<{ id:Number }>()
);

export const deleteBookSuccess= createAction(
    "[Books API] delete book API success",
    props<{ id:Number }>()
);