import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducers from '../reducers';
// import { RootState } from './storeTypes';

// ------------------------------------------------------------
// === persistantState STORE - redux-persist-Edition===
// ------------------------------------------------------------

const composeEnhancers = composeWithDevTools({});
const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: autoMergeLevel2
  // whitelist: ['reducers'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
export let persistor = persistStore(store);

// ------------------------------------------------------------
// === Default STORE ===
// ------------------------------------------------------------

// const composeEnhancers = composeWithDevTools({});

// export const store = createStore(
//   reducers,
//   {},
//   composeEnhancers(applyMiddleware(thunk))
// );

// ------------------------------------------------------------
// === persistantState STORE - Function-Edition===
// ------------------------------------------------------------

// function saveToLocalStorage(state: RootState) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem('persistantState', serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem('persistantState');
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// const composeEnhancers = composeWithDevTools({});

// export const store = createStore(
//   reducers,
//   loadFromLocalStorage(),
//   // composeEnhancers(applyMiddleware(thunk))
//   applyMiddleware(thunk)
// );

// store.subscribe(() => {
//   saveToLocalStorage({
//     posts: store.getState().posts,
//     users: store.getState().users,
//   });
// });
