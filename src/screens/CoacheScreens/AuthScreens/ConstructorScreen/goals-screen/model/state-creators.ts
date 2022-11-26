import {
  StateEmpty,
  StateError,
  StateHasData,
  StateInitial,
  StateLoading,
} from "./constructor-state";
import { GoalsResArray, GoalsResponseProps } from "../interface/interface";
import { Goals } from "./goals";

export function getInitialState(): StateInitial {
  return { type: "INITIAL", data: null, error: null };
}

export function getLoadingState(data: GoalsResArray | null): StateLoading {
  return { type: "LOADING", data, error: null };
}

export function getEmptyState(): StateEmpty {
  return { type: "EMPTY", data: {}, error: null };
}

export function getErrorState(error: Error): StateError {
  return { type: "ERROR", data: null, error };
}

export function getHasDataState(
  response: Array<GoalsResponseProps>
): StateHasData {
  return {
    type: "HAS_DATA",
    data: response.map((data) => new Goals(data)),
    error: null,
  };
}
