import React, { useEffect } from 'react';

import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedStore';
import { PostType } from '../services';
import PostCard from './PostCard';

const PostsList: React.FunctionComponent = () => {
  const { fetchPosts } = useActions();
  const { posts, loading, error } = useSelector((state) => state.posts);


  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPostsList = () => {
    return posts.map((post: PostType) => {
      return (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
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
