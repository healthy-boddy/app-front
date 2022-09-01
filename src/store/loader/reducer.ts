import { AnyAction } from 'redux';
import produce from 'immer';
import * as actions from './action-types';

interface LoadState {
  loader: boolean;
}

const initialState: LoadState = {
  loader: false,
};

function loaderReducer(state = initialState, { type, payload }: AnyAction) {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_LOADER:
        draft.loader = payload;
        break;
      default:
        return state;
    }
  });
}

export default loaderReducer;
