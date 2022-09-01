export const SET_GLOBAL_ERROR = 'error/SET_GLOBAL_ERROR';
export interface SetGlobalError {
  type: typeof SET_GLOBAL_ERROR;
  payload: boolean;
}

export const GENERATE_PASSWORD_ERROR = 'error/GENERATE_PASSWORD_ERROR';
export interface GeneratePasswordError {
  type: typeof GENERATE_PASSWORD_ERROR;
  payload: boolean;
}

export const GENERATE_WALLET_ERROR = 'error/GENERATE_WALLET_ERROR';
export interface GenerateWallet {
  type: typeof GENERATE_WALLET_ERROR,
  payload: string;
}


export const SET_TRANSFER_ERROR_SOL = 'error/SET_TRANSFER_ERROR_SOL';
export interface SetTransferErrorSol {
  type: typeof SET_TRANSFER_ERROR_SOL,
  payload: string;
}

