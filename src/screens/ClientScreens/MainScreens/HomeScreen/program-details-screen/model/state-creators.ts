import {
  StateEmpty,
  StateError,
  StateHasData,
  StateInitial,
  StateLoading,
} from "./constructor-state";
import { TaskResponseArray } from "../../../../../CoacheScreens/MainScreens/client-programs/editing-screen/interface";

export function getInitialState(): StateInitial {
  return { type: "INITIAL", data: null, error: null };
}

export function getLoadingState(data: TaskResponseArray | null): StateLoading {
  return { type: "LOADING", data, error: null };
}

export function getEmptyState(): StateEmpty {
  return { type: "EMPTY", data: {}, error: null };
}

export function getErrorState(error: Error): StateError {
  return { type: "ERROR", data: null, error };
}

export function getHasDataState(response: TaskResponseArray): StateHasData {
  return { type: "HAS_DATA", data: response, error: null };
}
