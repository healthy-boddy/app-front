import {
  StateEmpty,
  StateError,
  StateHasData,
  StateInitial,
  StateLoading,
} from "./constructor-state";
import {
  GlobalGoalsResArray,
  GoalsResponseProps,
} from "../interface/interface";
import { Goals } from "./goals";

export function getInitialState(): StateInitial {
  return { type: "INITIAL", data: null, error: null };
}

export function getLoadingState(
  data: GlobalGoalsResArray | null
): StateLoading {
  return { type: "LOADING", data, error: null };
}

export function getEmptyState(): StateEmpty {
  return { type: "EMPTY", data: {}, error: null };
}

export function getErrorState(error: Error): StateError {
  return { type: "ERROR", data: null, error };
}

export function addArrayForEditing(
  prevArray: Array<Goals>,
  nextElem: Goals
): StateHasData {
  return { type: "HAS_DATA", data: [...prevArray, nextElem], error: null };
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
