import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import CatchAll from './layout/CatchAll';
import PostsList from './pages/PostsList';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';
import { useActions } from './hooks/useActions';
import PostRender from './pages/PostRender';

const App = () => {
  const { fetchUsers, fetchPosts } = useActions();
  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<PostsList />} />
        <Route path="/post">
          <Route index element={<PostCreate />} />
          <Route path="/post/:postId" element={<PostRender />} />
          <Route path="/post/:postId/edit" element={<PostEdit />} />
        </Route>
        <Route path="*" element={<CatchAll />} />
      </Route>
    </Routes>
  );
};

export default App;
