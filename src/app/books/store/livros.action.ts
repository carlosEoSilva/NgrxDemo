import { createAction, props } from "@ngrx/store";
import { Livro } from "./livro.class";

export const buscarLivrosApi= createAction(
    "[API] buscar todos os livros"
);

export const buscarLivrosSucesso= createAction(
    "[API] buscar todos os livros sucesso",
    props<{ todosLivros:Livro[] }>()
);

export const salvarLivroApi= createAction(
    "[API] salvar livro",
    props<{ novoLivro:Livro }>()
);

export const salvarLivroApiSucesso= createAction(
    "[API] salvar livro sucesso",
    props<{ response:Livro }>()
);

export const editarLivroApi= createAction(
    "[API] atualizar livro",
    props<{ livroEditado:Livro }>()
);

export const editarLivroApiSucesso= createAction(
    "[API] atualizar livro sucesso",
    props<{ livroEditado:Livro }>()
);

