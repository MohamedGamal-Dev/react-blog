import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  CATCH_ALL,
  HOME_PAGE,
  POST,
  POST_BY_ID,
  POST_BY_ID_EDIT,
} from './routes';
import AppLayout from './layout/AppLayout';
import CatchAll from './layout/CatchAll';
import PostsList from './pages/PostsList';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';
import PostRender from './pages/PostRender';

// import { useActions } from './hooks/useActions';
// import { useAppState } from './hooks/useAppState';

const App = () => {
  // const { users, posts } = useAppState();

  // const { fetchUsers, fetchPosts } = useActions();
  // useEffect(() => {
  //   fetchUsers();
  //   fetchPosts();
  // }, []);

  // console.log(posts);
  // console.log(users);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={HOME_PAGE} element={<PostsList />} />
        <Route path={POST}>
          <Route index element={<PostCreate />} />
          <Route path={POST_BY_ID} element={<PostRender />} />
          <Route path={POST_BY_ID_EDIT} element={<PostEdit />} />
        </Route>
        <Route path={CATCH_ALL} element={<CatchAll />} />
      </Route>
    </Routes>
  );
};

export default App;
