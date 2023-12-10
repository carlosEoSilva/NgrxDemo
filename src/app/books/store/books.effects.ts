import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from '../books.service';
import { invokeBooksApi } from './books.action';
import { map, switchMap } from 'rxjs';
import { booksFetchApiSuccess } from './books.action';
import { Book } from './book.interface';

@Injectable()
export class BooksEffects{
    constructor(
        private actions$:Actions,
        private bookService:BooksService){}

    loadAllBooks$= createEffect(()=>
     this.actions$.pipe(
        ofType(invokeBooksApi),
        switchMap(()=>{
            return this.bookService
            .getBooks()
            .pipe(map((data:Book[])=> booksFetchApiSuccess({ allBooks: data})));
        })
     )       
    )
}