import {
  PostsState,
  PostsActions,
  PostsActionType,
  CreatePostActionType,
  DeletePostActionType,
} from '../../services';

const initialState = { posts: [], loading: false, error: null };

const postsReducer = (
  state: PostsState = initialState,
  action: PostsActions
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
        // loading: false,
        // error: null,
      };

    case DeletePostActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post.id !== action.payload;
        }),
        // loading: false,
        // error: null,
      };

    default:
      return state;
  }
};

export default postsReducer;
