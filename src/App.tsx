import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import PostsList from './pages/PostsList';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<PostsList />} />
        <Route path="/post">
          <Route index element={<PostCreate />} />
          <Route path="/post/:postId/edit" element={<PostEdit />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
