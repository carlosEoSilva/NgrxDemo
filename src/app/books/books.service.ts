import { Injectable } from '@angular/core';
import { Book } from './store/book.interface';
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(){

  }
  private booksList: Book[]= [
    {
      "id": 1,
      "title": "Harry Pother and the Philosopher's stone",
      "author": "J.K. Rowling",
      "cost": 300
    }
  ];

  public getBooks():Observable<Book[]>{
    console.log('getBooks');
    return of(this.booksList);
  }

}
