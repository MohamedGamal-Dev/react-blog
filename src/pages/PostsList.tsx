import React, { useEffect } from 'react';

import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedStore';
import { PostType } from '../services';
import PostCard from './PostCard';
import PostCreate from './PostCreate';

const PostsList: React.FunctionComponent = () => {
  const { fetchPosts } = useActions();
  let { posts, loading, error } = useSelector((state) => state.posts);

  // console.log( * , ' * >> *');
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
      <PostCreate />
      <br />
      <br />
      <h2>Posts List</h2>
      {renderPostsOption()}
    </>
  );
};

export default PostsList;
