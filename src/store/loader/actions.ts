import * as actions from './action-types';

export function setLoader(loader: boolean): actions.SetLoader {
  return {
    type: actions.SET_LOADER,
    payload: loader,
  };
}
