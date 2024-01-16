import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LivrosServico } from '../livros.service';
import { map, switchMap } from 'rxjs';
import { Livro } from './livro.class';
import  *  as act from './livros.action';

@Injectable()
export class LivrosEffects{
    constructor(
        private _actions$:Actions,
        private _servico:LivrosServico,
        ){ }

    buscarTodosLivros$= createEffect(()=>
     this._actions$.pipe(
        ofType(act.buscarLivrosApi),
        switchMap(()=>{
            return this._servico
                .buscarLivros()
                .pipe(map((data:Livro[])=> act.buscarLivrosSucesso({ todosLivros: data})));
        })
     )       
    );

    saveNewBook$= createEffect(()=>
        this._actions$.pipe(
            ofType(act.salvarLivroApi),
            switchMap((action)=>{
                return this._servico
                    .salvarLivro(action.novoLivro)
                    .pipe(map((data:Livro)=>{
                        return act.salvarLivroApiSucesso({ response: data});
                    }))
            })
        )    
    );

    updateBook$= createEffect(()=>
        this._actions$.pipe(
            ofType(act.editarLivroApi),
            switchMap((action)=>{
                return this._servico
                    .editarLivro(action.livroEditado)
                    .pipe(map((data:Livro)=>{
                        return act.editarLivroApiSucesso({ livroEditado: data});
                    }))
            })
        )    
    );

    
}