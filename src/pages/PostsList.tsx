import React, { useEffect } from 'react';

import { useDispatch, useSelector } from '../hooks/useTypedStore';
import { fetchPosts } from '../services';

const PostsList: React.FC = () => {
  const dispatch = useDispatch();
  let { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    // console.log(dispatch(fetchPosts()), 'ACTION >> fetchPosts >> PostsList');
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPostsList = () => {
    // console.log(posts, 'POSTS >> from >> PostList');
    return posts.map((post: any) => {
      // console.log(posts, 'POST >> from >> PostList (map)');
      return (
        <React.Fragment key={post.id}>
          <h3>{post.title}</h3>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <h2>Posts List</h2>
      {renderPostsList()}
    </>
  );
};

export default PostsList;
