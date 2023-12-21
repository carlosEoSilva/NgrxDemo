import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "./book.class";

//-trazer do STORE todos os livros com a FEATURE "mybooks".
export const selectBooks= createFeatureSelector<Book[]>("mybooks");

export const selectBookById= (bookId:number)=>{
    //-aqui ele vai trazer todos os livros com a feature "mybooks", 
    //-e aplicar neles a função anônima que está sendo passada como parâmetro 
    return createSelector(selectBooks, (books:Book[])=>{
        var bookById:Book[]= books.filter( x => x.Id == bookId);

        if(bookById.length == 0){
            return null;
        }
        return bookById[0];
    })
}