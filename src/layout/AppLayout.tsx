import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/post">New Post</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default AppLayout;
