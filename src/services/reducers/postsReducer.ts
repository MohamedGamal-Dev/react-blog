import {
  PostsState,
  PostsActions,
  PostsActionType,
  CreatePostActionType,
  CreatePostAction,
} from '../../services';

const initialState = { posts: [], loading: false, error: null };

const postsReducer = (
  state: PostsState = initialState,
  action: PostsActions | CreatePostAction
) => {
  switch (action.type) {
    case PostsActionType.FETCH_POSTS:
      return { ...state, posts: [], loading: true, error: null };

    case PostsActionType.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false, error: null };

    case PostsActionType.FETCH_POSTS_ERROR:
      return { ...state, posts: [], loading: false, error: action.payload };

    case CreatePostActionType.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default postsReducer;
