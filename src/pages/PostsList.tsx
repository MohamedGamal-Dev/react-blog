import React from 'react';
import { useAppState } from '../hooks/useAppState';

import { PostType } from '../services';
import PostCard from './PostCard';

const PostsList: React.FunctionComponent = () => {
  const { posts, postsLoading, postsError } = useAppState();

  // ----------------------------------------
  // Sorting (POSTS) to Show New POST @ TOP
  // PERFORMANCE TEST
  // ----------------------------------------
  /* Sort + Map - Variant */

  // const sortedPosts = posts.slice().sort((one, two) => {
  //   return one.date! > two.date! ? -1 : 1;
  // });

  // const renderPostsList = () => {
  //   return sortedPosts.map((post: PostType) => {
  //     return (
  //       <React.Fragment key={post.id}>
  //         <PostCard post={post} />
  //       </React.Fragment>
  //     );
  //   });
  // };

  /* FOR LOOP - Backward loop Variant  */
  const renderLoopPostsList = (posts: PostType[]) => {
    let postsBackLoop = [];
    for (let i = posts.length - 1; i >= 0; i--) {
      const post = posts[i];
      postsBackLoop.push(
        <React.Fragment key={post.id}>
          <PostCard post={post} />
        </React.Fragment>
      );
    }
    return postsBackLoop;
  };

  return (
    <>
      <div className="flex-1 flex-col space-y-4">
        {postsLoading && <h4>postsLoading...</h4>}
        {postsError && <p>Error: {postsError}</p>}
        {/* {renderPostsList()} */}
        <>{renderLoopPostsList(posts)}</>
      </div>
    </>
  );
};

export default PostsList;
