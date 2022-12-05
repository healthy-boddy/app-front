import { TaskResponseArray } from "../editing-screen/interface";

export interface StateInitial {
  type: "INITIAL";
  data: null;
  error: null;
}

export interface StateLoading {
  type: "LOADING";
  data: TaskResponseArray | null;
  error: null;
}

export interface StateHasData {
  type: "HAS_DATA";
  data: TaskResponseArray;
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

export type ConstructorStates =
  | StateInitial
  | StateLoading
  | StateHasData
  | StateEmpty
  | StateError;
