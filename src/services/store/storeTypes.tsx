import { store } from './store';

// Infer the `RootState` and `TypedDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;

export type TypedDispatch = typeof store.dispatch;
