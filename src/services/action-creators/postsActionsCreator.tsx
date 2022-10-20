import axios from 'axios';
import { Dispatch } from 'redux';
import { nanoid } from 'nanoid';
import { formatISO } from 'date-fns';

import {
  PostType,
  CreatePostType,
  PostsActionType,
  PostsActions,
  CreatePostActionType,
  DeletePostActionType,
  EditPostActionType,
} from '../../services';

// Fetching Data from db API
// local-server
let basePostsURL = 'http://localhost:3004/posts';
// Live-server
// let basePostsURL = 'https://jsonplaceholder.typicode.com/posts';

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
export const createPost = (postInputs: CreatePostType) => {
  return async (dispatch: Dispatch<PostsActions>) => {
    const { userId, title, body } = postInputs;

    const newPost: PostType = {
      userId,
      id: nanoid(),
      title,
      body,
      date: formatISO(new Date()),
    };

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

// Create New Post
export const editPost = (editedPost: PostType) => {
  return async (dispatch: Dispatch<PostsActions>) => {
    const { data } = await axios.put(
      `${basePostsURL}/${editedPost.id}`,
      editedPost
    );

    dispatch({
      type: EditPostActionType.EDIT_POST,
      payload: data,
    });
  };
};
