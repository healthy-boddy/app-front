import { ResponseArrayConstructor } from "../../../../AuthScreens/ConstructorScreen/interfaces";

export interface ConstructorStateInitial {
  type: "INITIAL";
  data: null;
  error: null;
}

export interface ConstructorStateLoading {
  type: "LOADING";
  data: ResponseArrayConstructor | null;
  error: null;
}

export interface ConstructorStateHasData {
  type: "HAS_DATA";
  data: ResponseArrayConstructor;
  error: null;
}

export interface ConstructorStateEmpty {
  type: "EMPTY";
  data: Record<string, never>;
  error: null;
}

export interface ConstructorStateError {
  type: "ERROR";
  data: null;
  error: Error;
}

export type ConstructorCardState =
  | ConstructorStateInitial
  | ConstructorStateLoading
  | ConstructorStateHasData
  | ConstructorStateEmpty
  | ConstructorStateError;
