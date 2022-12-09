import { QuizArray } from "../interface";

export interface StateInitial {
  type: "INITIAL";
  data: null;
  error: null;
}

export interface StateLoading {
  type: "LOADING";
  data: QuizArray | null;
  error: null;
}

export interface StateHasData {
  type: "HAS_DATA";
  data: QuizArray;
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

export type QuizState =
  | StateInitial
  | StateLoading
  | StateHasData
  | StateEmpty
  | StateError;
