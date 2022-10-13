import axios from 'axios';
import { Dispatch } from 'redux';

import {ActionType} from '../actions-type'
import {PostsActions} from '../actions'

// Fetching Data from db API
let basePostsURL = 'http://localhost:3004/posts';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsActions>) => {
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
