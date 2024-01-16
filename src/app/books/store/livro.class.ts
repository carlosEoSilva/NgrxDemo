import { ILivro } from "./livro.interface";

export class Livro implements ILivro{
    Id:number;
    Titulo:string;
    Autor:string;
    Capa:string;
    Preco:number;

    constructor(
        id:number= 0, 
        titulo:string= '', 
        autor:string= '', 
        capa:string= '', 
        preco:number= 0)
    {
        this.Id= id;
        this.Titulo= titulo;
        this.Autor= autor;
        this.Capa= capa;
        this.Preco= preco;
    }
}