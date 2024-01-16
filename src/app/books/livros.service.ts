import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Livro } from './store/livro.class';

@Injectable({
  providedIn: 'root'
})
export class LivrosServico {
  private _listaLivros: Livro[]= [
    {
      "Id": 1,
      "Titulo": "Harry Pother and the Philosopher's stone",
      "Autor": "J.K. Rowling",
      "Capa": "https://cdn.kobo.com/book-images/b705120b-930c-4bda-8652-103b85a0dd90/1200/1200/False/harry-potter-and-the-philosopher-s-stone-5.jpg",
      "Preco": 120
    },
    {
      "Id": 2,
      "Titulo": "Divergent",
      "Autor": "Veronica Roth",
      "Capa": "https://m.media-amazon.com/images/I/91oNu+R7EUL._AC_UF1000,1000_QL80_.jpg",
      "Preco": 190
    },
    {
      "Id": 3,
      "Titulo": "The Hunger Games",
      "Autor": "Suzane Collins",
      "Capa": "https://cdn.kobo.com/book-images/fcc61f79-6dc3-4578-a49b-9628deb9ae23/1200/1200/False/the-hunger-games-hunger-games-book-one.jpg",
      "Preco": 100
    }
  ];

  public getProximoId():number{
    let ultimoLivro:Livro;

    ultimoLivro= this._listaLivros.reduce((accumulator:Livro, current:Livro)=>{
        return accumulator.Id > current.Id ? accumulator : current;
      });

    return ultimoLivro.Id + 1;
  }

  public buscarLivros():Observable<Livro[]>{
    return of(this._listaLivros);
  }

  public salvarLivro(novoLivro:Livro):Observable<Livro>{
    this._listaLivros = Object.assign([], this._listaLivros);
    this._listaLivros.push(novoLivro);
    
    return of(novoLivro);
  }

  public editarLivro(livroEditado:Livro):Observable<Livro>{

    console.log(livroEditado);

    let index= this._listaLivros.findIndex((book)=>{ return book.Id === livroEditado.Id });
    this._listaLivros = Object.assign([], this._listaLivros);
    this._listaLivros[index]= livroEditado;
    
    return of(this._listaLivros[index]);
  }

}
