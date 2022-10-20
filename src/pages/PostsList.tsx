import React from 'react';

import { useSelector } from '../hooks/useTypedStore';
import { PostType } from '../services';
import PostCard from './PostCard';

const PostsList: React.FunctionComponent = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);

  // Sorting (POSTS) to Show New POST @ TOP
  const sortedPosts = posts.slice().sort((one, two) => {
    // console.log(one.date);
    // console.log(two.date);
    return one.date! > two.date! ? -1 : 1;
  });

  // console.log(posts, '=== POSTS ===');
  // console.log('***', sortedPosts, '***');

  const renderPostsList = () => {
    return sortedPosts.map((post: PostType) => {
      return (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
          {/* <TestCard post={post} /> */}
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
      {/* <h2>Posts List</h2> */}
      <div className="flex-1 flex-col space-y-4">{renderPostsOption()}</div>
    </>
  );
};

export default PostsList;
