import axios from 'axios';
import { Dispatch } from 'redux';
import { nanoid } from 'nanoid';

import {
  PostsActionType,
  PostsActions,
  CreatePostActionType,
  CreatePostAction,
} from '../../services';

// Fetching Data from db API
let basePostsURL = 'http://localhost:3004/posts';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsActions>) => {
    dispatch({
      type: PostsActionType.FETCH_POSTS,
    });

    try {
      const response = await axios.get(basePostsURL);

      dispatch({
        type: PostsActionType.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: PostsActionType.FETCH_POSTS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};

// Create New Post
export const createPost = (title: string, body: string) => {
  let newPost = { userId: 'XCMxarCjaY785a8tvZvX-', id: nanoid(), title, body };
  async (dispatch: Dispatch<CreatePostAction>) => {
    const { data } = await axios.post(basePostsURL, newPost);

    dispatch({
      type: CreatePostActionType.CREATE_POST,
      payload: data,
    });
  };
};
