import { createReducer, on } from "@ngrx/store";
import { Livro } from "./livro.class";
import * as act from "./livros.action";

export const initialState: ReadonlyArray<Livro>= [];

export const livrosReducer= createReducer(
    initialState,

    on(act.buscarLivrosSucesso, (state, { todosLivros })=>{
        return todosLivros;
    }),

    on(act.salvarLivroApiSucesso, (state, { response })=>{
        let newState= [...state];//-o novo estado é uma cópia do estado anterior
        newState.push(response);//-adicionando novas informações na cópia do estado anterior
        return newState;
    }),

    on(act.editarLivroApiSucesso, (state, { livroEditado })=>{
        let newState= state.filter(x => x.Id !== livroEditado.Id);
        newState.push(livroEditado);
        return newState;
    })
)