import { useSelector } from './useTypedStore';

export const useAppState = () => {
  const { users } = useSelector((state) => state.users);
  users ? users : null;

  const { posts, loading, error } = useSelector((state) => state.posts);

  // posts ? posts : null;

  return {
    usersState: users,
    postsList: posts,
    postsLoading: loading,
    postsError: error,
  };
};
