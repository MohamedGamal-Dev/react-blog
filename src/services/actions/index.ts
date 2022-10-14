import { PostsActionType, PostType } from '../../services';

interface FetchPostsAction {
  type: PostsActionType.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostsActionType.FETCH_POSTS_SUCCESS;
  payload: PostType[];
}
interface FetchPostsErrorAction {
  type: PostsActionType.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostsActions =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
