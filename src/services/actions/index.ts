import { ActionType } from '../actions-type';
import { Post } from '../reducers/postsReducer';
interface FetchPostsAction {
  type: ActionType.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: ActionType.FETCH_POSTS_SUCCESS;
  payload: Post[];
}
interface FetchPostsErrorAction {
  type: ActionType.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostsActions =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
