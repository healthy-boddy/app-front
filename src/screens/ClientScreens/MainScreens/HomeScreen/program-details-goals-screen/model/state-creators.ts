import {
  StateEmpty,
  StateError,
  StateHasData,
  StateInitial,
  StateLoading,
} from "./constructor-state";
import { Goals } from "./goals";
import {
  GlobalGoalsResArray,
  GoalsResponseProps,
} from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/goasl-editing-screen/interface/interface";

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

export function getHasDataState(
  response: Array<GoalsResponseProps>
): StateHasData {
  return {
    type: "HAS_DATA",
    data: response.map((data) => new Goals(data)),
    error: null,
  };
}
