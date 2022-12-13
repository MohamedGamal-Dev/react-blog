import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './services';
import App from './App';
import './styles/index.css';

//  #### DEV PURPOSE ONLY...... ####
// import { ThunkDispatch } from 'redux-thunk';
// import {
//   PostsActions,
//   PostsState,
//   actionCreators,
//   UsersState,
//   UsersActions,
// } from './services/';

// (store.dispatch as ThunkDispatch<PostsState, unknown, PostsActions>)(
//   actionCreators.fetchPosts()
// );
// (store.dispatch as ThunkDispatch<UsersState, unknown, UsersActions>)(
//   actionCreators.fetchUsers()
// );
//  #### DEV PURPOSE ONLY...... ####

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
