import React, { useEffect } from 'react';

import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedStore';

const PostsList: React.FunctionComponent = () => {
  const { fetchPosts } = useActions();
  let { posts, loading, error } = useSelector((state) => state.posts);

  // console.log( * , ' * >> *');
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPostsList = () => {
    return posts.map((post: any) => {
      return (
        <React.Fragment key={post.id}>
          <h3>{post.title}</h3>
        </React.Fragment>
      );
    });
  };

  let renderPostsOption = () => {
    return (
      <>
        {loading && <h4>Loading...</h4>}
        {error && <p>Error: {error}</p>}
        {renderPostsList()}
      </>
    );
  };

  return (
    <>
      <h2>Posts List</h2>
      {renderPostsOption()}
    </>
  );
};

export default PostsList;
