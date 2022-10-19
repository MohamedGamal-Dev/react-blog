import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store, UsersActions, UsersState } from './services';
import App from './App';
import './styles/index.css';


import { fetchPosts, fetchUsers } from './services/action-creators';
import { PostsActions, PostsState } from './services/';
import { ThunkDispatch } from 'redux-thunk';



(store.dispatch as ThunkDispatch<PostsState, unknown, PostsActions>)(
  fetchPosts()
);
(store.dispatch as ThunkDispatch<UsersState, unknown, UsersActions>)(
  fetchUsers()
);


console.log()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
