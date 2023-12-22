import { createAction, props } from "@ngrx/store";
import { IAppstate } from "./appstate.interface";

export const setApiStatus= createAction(
    '[API] success or failure status',
    props<{ apiStatus:IAppstate}>()
)