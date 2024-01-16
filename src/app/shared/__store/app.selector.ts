import { createFeatureSelector } from "@ngrx/store";
import { IAppstate } from "./appstate.interface";

export const selectAppState= createFeatureSelector<IAppstate>('myappstate');