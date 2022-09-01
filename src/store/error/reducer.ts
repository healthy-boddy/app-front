import produce from 'immer';
import { AnyAction } from 'redux';
import * as actions from './action-types';

interface AuthState {
  globalError: boolean;
  generatePasswordError: boolean,
  generateWallet: string,
  transferError: string
}

const initialState: AuthState = {
  globalError: false,
  generatePasswordError: false,
  generateWallet: '',
  transferError: ''
};

function errorReducer(state = initialState, { type, payload }: AnyAction) {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_GLOBAL_ERROR:
        draft.globalError = payload;
        break;
      case actions.GENERATE_PASSWORD_ERROR: 
      draft.generatePasswordError = payload;
      break;
      case actions.GENERATE_WALLET_ERROR: 
      draft.generateWallet = payload;
      break;
      case actions.SET_TRANSFER_ERROR_SOL: 
      draft.transferError = payload;
      break;
      default:
        break;
    }
  });
}

export default errorReducer;
