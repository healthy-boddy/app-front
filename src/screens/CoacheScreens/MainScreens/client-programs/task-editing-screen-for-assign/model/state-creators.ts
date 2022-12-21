import {
  ConstructorStateEmpty,
  ConstructorStateError,
  ConstructorStateHasData,
  ConstructorStateInitial,
  ConstructorStateLoading,
} from "./constructor-state";
import { ResponseArrayConstructor } from "../../../../AuthScreens/ConstructorScreen/interfaces";

export function getInitialState(): ConstructorStateInitial {
  return { type: "INITIAL", data: null, error: null };
}

export function getLoadingState(
  data: ResponseArrayConstructor | null
): ConstructorStateLoading {
  return { type: "LOADING", data, error: null };
}

export function getEmptyState(): ConstructorStateEmpty {
  return { type: "EMPTY", data: {}, error: null };
}

export function getErrorState(error: Error): ConstructorStateError {
  return { type: "ERROR", data: null, error };
}

export function getHasDataState(
  response: ResponseArrayConstructor
): ConstructorStateHasData {
  return { type: "HAS_DATA", data: response, error: null };
}
