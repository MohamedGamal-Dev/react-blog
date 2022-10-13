import {
  TypedUseSelectorHook,
  useDispatch as nonTyped_useDispatch,
  useSelector as nonTyped_useSelector,
} from 'react-redux';
import type { RootState, TypedDispatch } from '../services';

// Creating Refactor typed version of (useDispatch and useSelector)
export const useDispatch: () => TypedDispatch = nonTyped_useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> =
  nonTyped_useSelector;
