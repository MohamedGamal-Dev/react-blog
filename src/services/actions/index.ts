import { ActionType } from '../actions-type';

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

export type PostsActions =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
