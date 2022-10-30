import {
  // PostType,
  PostsState,
  PostsActions,
  PostsActionType,
  CreatePostActionType,
  DeletePostActionType,
  EditPostActionType,
  ReactionCountActionType,
} from '../../services';

const initialState: PostsState = { posts: [], loading: false, error: null };

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
      };

    case DeletePostActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post.id !== action.payload;
        }),
      };

    case EditPostActionType.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.payload.id ? action.payload : post;
        }),
      };

    case ReactionCountActionType.REACTION_COUNT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.payload.id
            ? {
                ...post,
                reactions: {
                  ...post.reactions,
                  [action.payload.reaction]:
                    post.reactions![action.payload.reaction] + 1,
                },
              }
            : post;
        }),
      };

    default:
      return state;
  }
};

export default postsReducer;
