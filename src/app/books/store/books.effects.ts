import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from '../books.service';
import { map, switchMap } from 'rxjs';
import { booksFetchApiSuccess } from './books.action';
import { Book } from './book.class';
import { IAppstate } from 'src/app/shared/store/appstate.interface';
import { Store } from '@ngrx/store';
import { setApiStatus } from 'src/app/shared/store/app.action';
import  *  as act from './books.action';

@Injectable()
export class BooksEffects{
    constructor(
        private _actions$:Actions,
        private _bookService:BooksService,
        private _appStore:Store<IAppstate>){ }

    loadAllBooks$= createEffect(()=>
     this._actions$.pipe(
        ofType(act.invokeBooksApi),
        switchMap(()=>{
            return this._bookService
                .getBooks()
                .pipe(map((data:Book[])=> booksFetchApiSuccess({ allBooks: data})));
        })
     )       
    );

    saveNewBook$= createEffect(()=>
        this._actions$.pipe(
            ofType(act.invokeSaveBookApi),
            switchMap((action)=>{
                this._appStore.dispatch(setApiStatus({apiStatus:{apiResponseMessage:'', apiStatus:''}}))
                return this._bookService
                    .postBook(action.newBook)
                    .pipe(map((data:Book)=>{
                        this._appStore.dispatch(setApiStatus({apiStatus:{apiResponseMessage:'', apiStatus:'success'}}))
                        return act.saveBookApiSuccess({ response: data});
                    }))
            })
        )    
    );

    updateBook$= createEffect(()=>
        this._actions$.pipe(
            ofType(act.invokeUpdateBookApi),
            switchMap((action)=>{
                this._appStore.dispatch(setApiStatus({apiStatus:{apiResponseMessage:'', apiStatus:''}}))
                return this._bookService
                    .updateBook(action.updatedBook)
                    .pipe(map((data:Book)=>{
                        this._appStore.dispatch(setApiStatus({apiStatus:{apiResponseMessage:'', apiStatus:'success'}}))
                        return act.saveBookApiSuccess({ response: data});
                    }))
            })
        )    
    );

    deleteBook$= createEffect(()=>
        this._actions$.pipe(
            ofType(act.invokeDeleteBookApi),
            switchMap((action)=>{
                this._appStore.dispatch(setApiStatus({apiStatus:{apiResponseMessage:'', apiStatus:''}}))
                return this._bookService
                    .deleteBook(action.id)
                    .pipe(map((data:Number)=>{
                        this._appStore.dispatch(setApiStatus({apiStatus:{apiResponseMessage:'', apiStatus:'success'}}))
                        return act.deleteBookSuccess({ id: data});
                    }))
            })
        )    
    );
}