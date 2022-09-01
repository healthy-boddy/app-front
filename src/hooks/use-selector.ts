import {
  TypedUseSelectorHook,
  useSelector as useOriginalSelector,
} from 'react-redux';
import { AppState } from '../store/root-reducer';

export const useSelector: TypedUseSelectorHook<AppState> = useOriginalSelector;
