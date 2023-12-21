import { IBook } from "./book.interface";

export class Book implements IBook{
    Id:number;
    Title:string;
    Author:string;
    Cover:string;
    Price:number;

    constructor(id:number= 0, title:string= '', author:string= '', cover:string= '', price:number= 0){
        this.Id= id;
        this.Title= title;
        this.Author= author;
        this.Cover= cover;
        this.Price= price;
    }
}