// import { PostsActions } from '../actions';
// import { PostsActionType } from '../actions-type';
// import { PostsState } from '../../services';

import { PostsActions, PostsActionType, PostsState } from '../../services';

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

    default:
      return state;
  }
};

export default postsReducer;
