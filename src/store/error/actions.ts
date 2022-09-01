import * as actions from './action-types';

export function setGlobalError(payload: boolean): actions.SetGlobalError {
  return {
    type: actions.SET_GLOBAL_ERROR,
    payload,
  };
}

export function setGeneratePasswordError(payload: boolean): actions.GeneratePasswordError {
  return {
    type: actions.GENERATE_PASSWORD_ERROR,
    payload,
  };
}
export function generateWalletError (payload: string): actions.GenerateWallet {
  return {
    type: actions.GENERATE_WALLET_ERROR,
    payload
  }
}

export function setTransferErrorSol (payload: string): actions.SetTransferErrorSol {
  return {
    type: actions.SET_TRANSFER_ERROR_SOL,
    payload
  }
}
