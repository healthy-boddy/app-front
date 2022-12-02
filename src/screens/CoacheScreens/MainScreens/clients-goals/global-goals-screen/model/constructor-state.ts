import { Goals } from "./goals";
import { GlobalGoalsResArray } from "../../global-goasl-editing-screen/interface/interface";

export interface StateInitial {
  type: "INITIAL";
  data: null;
  error: null;
}

export interface StateLoading {
  type: "LOADING";
  data: GlobalGoalsResArray | null;
  error: null;
}

export interface StateHasData {
  type: "HAS_DATA";
  data: Array<Goals>;
  error: null;
}

export interface StateEmpty {
  type: "EMPTY";
  data: Record<string, never>;
  error: null;
}

export interface StateError {
  type: "ERROR";
  data: null;
  error: Error;
}

export type ConstructorState =
  | StateInitial
  | StateLoading
  | StateHasData
  | StateEmpty
  | StateError;
