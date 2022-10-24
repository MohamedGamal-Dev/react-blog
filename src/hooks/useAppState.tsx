import { shallowEqual } from 'react-redux';
import { PostType } from '../services';
import { useSelector } from './useTypedStore';

export const useAppState = () => {
  let users = useSelector((state) => state.users.users);
  const { posts, loading, error } = useSelector(
    (state) => state.posts,
    shallowEqual
  );

  const getPostById = (postId: string): PostType => {
    let post = posts.find((post) => {
      return post.id === postId;
    });
    return post!;
  };

  return {
    users: users!,
    posts: posts,
    postsLoading: loading,
    postsError: error,
    getPostById: getPostById,
  };
};
