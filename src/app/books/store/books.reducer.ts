import { createReducer, on } from "@ngrx/store";
import { booksFetchApiSuccess, deleteBookSuccess, saveBookApiSuccess, updateBookSuccess } from "./books.action";
import { Book } from "./book.class";

export const initialState: ReadonlyArray<Book>= [];

export const bookReducer= createReducer(
    initialState,

    on(booksFetchApiSuccess, (state, { allBooks })=>{
        return allBooks;
    }),

    on(saveBookApiSuccess, (state, { response })=>{
        let newState= [...state];//-o novo estado é uma cópia do estado anterior
        newState.push(response);//-adicionando novas informações na cópia do estado anterior
        return newState;
    }),

    on(updateBookSuccess, (state, { updatedBook })=>{
        let newState= state.filter(x => x.Id !== updatedBook.Id);
        newState.push(updatedBook);
        return newState;
    }),

    on(deleteBookSuccess, (state, { id })=>{
        let newState= state.filter( x => x.Id !== id);
        return newState;
    })
)