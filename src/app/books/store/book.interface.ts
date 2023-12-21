import { Book } from "./book.class";

export interface IBook{
    Id:number;
    Title:string;
    Author:string;
    Cover:string;
    Price:number;
}

export interface IBookState{
    books:Book[]
}