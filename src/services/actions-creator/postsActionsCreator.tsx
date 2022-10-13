import axios from 'axios';

// Fetching Data from db API
let basePostsURL = 'http://localhost:3004/posts';

export const fetchPosts = () => {
  return async (dispatch: any) => {
    let response = await axios.get(basePostsURL);

    // console.log(response, ' === fetch-response === ');
    // console.log(response.data, ' === fetch-response DATA === ');

    dispatch({
      type: 'fetch_posts',
      payload: response.data,
    });
  };
};
