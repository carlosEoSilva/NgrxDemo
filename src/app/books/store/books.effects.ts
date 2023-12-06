import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from '../books.service';

@Injectable()
export class BooksEffects{
    constructor(
        private _actions$:Actions,
        private _bookService:BooksService){}
}