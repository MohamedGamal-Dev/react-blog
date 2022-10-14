import { PostsActions } from '../actions';
import { ActionType } from '../actions-type';

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: null | string;
}

export type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const initialState = { posts: [], loading: false, error: null };

const postsReducer = (
  state: PostsState = initialState,
  action: PostsActions
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
