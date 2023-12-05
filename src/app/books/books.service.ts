import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private booksList=[
    {
      "id": 1,
      "title": "Harry Pother and the Philosopher's stone",
      "author": "J.K. Rowling",
      "cost": "300"
    }
  ] 

  public getBooks(){
    return this.booksList;
  }
}
