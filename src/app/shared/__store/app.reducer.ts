import { createReducer, on } from "@ngrx/store";
import { IAppstate } from "./appstate.interface";
import { setApiStatus } from "./app.action";

export const initialState:IAppstate={
    apiStatus:'',
    apiResponseMessage:''
}

//-reducer para o controle de respostas global da api
export const appReducer= createReducer(
    initialState,
    on(setApiStatus, (state, { apiStatus })=>{
        return apiStatus;
    })
)