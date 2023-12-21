import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Book } from './store/book.class';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(){

  }
  private _booksList: Book[]= [
    {
      "Id": 1,
      "Title": "Harry Pother and the Philosopher's stone",
      "Author": "J.K. Rowling",
      "Cover": "https://cdn.kobo.com/book-images/b705120b-930c-4bda-8652-103b85a0dd90/1200/1200/False/harry-potter-and-the-philosopher-s-stone-5.jpg",
      "Price": 120
    },
    {
      "Id": 2,
      "Title": "Divergent",
      "Author": "Veronica Roth",
      "Cover": "https://m.media-amazon.com/images/I/91oNu+R7EUL._AC_UF1000,1000_QL80_.jpg",
      "Price": 190
    },
    {
      "Id": 3,
      "Title": "The Hunger Games",
      "Author": "Suzane Collins",
      "Cover": "https://cdn.kobo.com/book-images/fcc61f79-6dc3-4578-a49b-9628deb9ae23/1200/1200/False/the-hunger-games-hunger-games-book-one.jpg",
      "Price": 100
    }
  ];

  public getBookNextId():number{
    let lastBook:Book;

    lastBook= this._booksList.reduce((accumulator:Book, current:Book)=>{
        return accumulator.Id > current.Id ? accumulator : current;
      });

    return lastBook.Id + 1;
  }

  public getBooks():Observable<Book[]>{
    return of(this._booksList);
  }

  public postBook(newBook:Book):Observable<Book>{
    this._booksList = Object.assign([], this._booksList);
    this._booksList.push(newBook);
    
    return of(newBook);
  }

  public updateBook(updatedBook:Book):Observable<Book>{
    let index= this._booksList.findIndex((book)=>{ return book.Id === updatedBook.Id });
    this._booksList = Object.assign([], this._booksList);
    this._booksList[index]= updatedBook;
    
    return of(this._booksList[index]);
  }

  public deleteBook(bookId:Number):Observable<Number>{
    this._booksList= Object.assign([], this._booksList);
    this._booksList= this._booksList.filter((x)=> x.Id !== bookId);
    return of(bookId);
  }

}
