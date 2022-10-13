import { PostsAction, ActionType } from '../../services';

interface PostsState {
  posts: string[];
  loading: boolean;
  error: null | string;
}

const initialState = { posts: [], loading: false, error: null };

const postsReducer = (
  state: PostsState = initialState,
  action: PostsAction
) => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return { ...state, posts: [], loading: true, error: null };

    case ActionType.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false, error: null };

    case ActionType.FETCH_POSTS_ERROR:
      return { ...state, posts: [], loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
