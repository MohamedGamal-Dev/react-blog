import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { RootState } from './storeTypes';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

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

// export const store = createStore(
//   reducers,
//   loadFromLocalStorage(),
//   applyMiddleware(thunk)
// );

// store.subscribe(() => {
//   saveToLocalStorage({
//     posts: store.getState().posts,
//     users: store.getState().users,
//   });
// });
