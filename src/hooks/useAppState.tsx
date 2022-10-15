import { PostType } from '../services';
import { useSelector } from './useTypedStore';

export const useAppState = () => {
  const { users } = useSelector((state) => state.users);

  const { posts, loading, error } = useSelector((state) => state.posts);

  const getPostById = (postId: string): PostType => {
    let post = posts.find((post) => {
      return post.id === postId;
    });

    return post!;
  };

  return {
    usersState: users!,
    postsList: posts,
    postsLoading: loading,
    postsError: error,
    getPostById: getPostById,
  };
};
