import {
  ProgramAssignedToClientArray,
  ProgramInfo,
} from "../interface/interface";

export interface StateInitial {
  type: "INITIAL";
  data: null;
  error: null;
}

export interface StateLoading {
  type: "LOADING";
  data: ProgramAssignedToClientArray | null;
  error: null;
}

export interface StateHasData {
  type: "HAS_DATA";
  data: ProgramAssignedToClientArray;
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

export type UsersStates =
  | StateInitial
  | StateLoading
  | StateHasData
  | StateEmpty
  | StateError;
