import axios from 'axios';

// Fetching Data from db API
let basePostsURL = 'http://localhost:3004/zxposts';

export const fetchPosts = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'fetch_posts',
    });

    try {
      let response = await axios.get(basePostsURL);

      // console.log(response, ' === fetch-response === ');
      // console.log(response.data, ' === fetch-response DATA === ');

      dispatch({
        type: 'fetch_posts_success',
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: 'fetch_posts_error',
        payload: error.message,
      });
    }
  };
};
