import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Livro } from "./livro.class";

//-trazer do STORE todos os livros com a FEATURE "meuslivros".
export const selectBooks= createFeatureSelector<Livro[]>("meuslivros");

export const selectBookById= (bookId:number)=>{
    //-aqui ele vai trazer todos os livros com a feature "meuslivros", 
    //-e aplicar neles a função anônima que está sendo passada como parâmetro 
    return createSelector(selectBooks, (books:Livro[])=>{
        var bookById:Livro[]= books.filter( x => x.Id == bookId);

        if(bookById.length == 0){
            return null;
        }
        return bookById[0];
    })
}