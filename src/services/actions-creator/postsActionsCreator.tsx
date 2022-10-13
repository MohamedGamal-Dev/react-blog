import axios from 'axios';
import { Dispatch } from 'redux';

export enum ActionType {
  FETCH_POSTS = 'fetch_posts',
  FETCH_POSTS_SUCCESS = 'fetch_posts_success',
  FETCH_POSTS_ERROR = 'fetch_posts_error',
}

interface FetchPostsAction {
  type: ActionType.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: ActionType.FETCH_POSTS_SUCCESS;
  payload: string[];
}
interface FetchPostsErrorAction {
  type: ActionType.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;

// Fetching Data from db API
let basePostsURL = 'http://localhost:3004/posts';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch({
      type: ActionType.FETCH_POSTS,
    });

    try {
      let response = await axios.get(basePostsURL);

      dispatch({
        type: ActionType.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCH_POSTS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
