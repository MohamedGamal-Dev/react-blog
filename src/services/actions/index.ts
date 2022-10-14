import {
  PostsActionType,
  CreatePostActionType,
  DeletePostActionType,
  EditPostActionType,
  PostType,
} from '../../services';

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

interface CreatePostAction {
  type: CreatePostActionType.CREATE_POST;
  payload: PostType;
}

interface DeletePostAction {
  type: DeletePostActionType.DELETE_POST;
  payload: string;
}

interface EditPostAction {
  type: EditPostActionType.EDIT_POST;
  payload: PostType;
}

export type PostsActions =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | CreatePostAction
  | DeletePostAction
  | EditPostAction;