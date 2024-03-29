import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Store, select } from '@ngrx/store';
import { selectBooks } from '../store/books.selector';
import { invokeBooksApi } from '../store/books.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  store: any;

  constructor(
    private _service:BooksService, 
    private _store:Store) { }

  books$= this._store.pipe(select(selectBooks));

  ngOnInit(): void {
    this._store.dispatch(invokeBooksApi())
  }

}
