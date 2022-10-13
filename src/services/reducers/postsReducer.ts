const initialState = { posts: [] };

interface PostsState {
  posts: string[];
}

const postsReducer = (state: PostsState = initialState, action: any) => {
  switch (action.type) {
    case 'fetch_posts':
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
