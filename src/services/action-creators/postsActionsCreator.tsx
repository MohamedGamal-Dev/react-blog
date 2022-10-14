import axios from 'axios';
import { Dispatch } from 'redux';

import {
  PostType,
  PostsActionType,
  PostsActions,
  CreatePostActionType,
  DeletePostActionType,
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
export const createPost = (newPost: PostType) => {
  return async (dispatch: Dispatch<PostsActions>) => {
    const { data } = await axios.post(basePostsURL, newPost);
    dispatch({
      type: CreatePostActionType.CREATE_POST,
      payload: data,
    });
  };
};

// Delete Post
export const deletePost = (id: string) => {
  return async (dispatch: Dispatch<PostsActions>) => {
    const { data } = await axios.delete(`${basePostsURL}/${id}`);
    dispatch({
      type: DeletePostActionType.DELETE_POST,
      payload: id,
    });
  };
};
