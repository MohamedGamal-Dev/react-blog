const initialState = { posts: [], loading: false, error: null };

interface PostsState {
  posts: string[];
  loading: boolean;
  error: string | null;
}

const postsReducer = (state: PostsState = initialState, action: any) => {
  switch (action.type) {
    case 'fetch_posts':
      return { ...state, posts: [], loading: true, error: null };

    case 'fetch_posts_success':
      return { ...state, posts: action.payload, loading: false, error: null };

    case 'fetch_posts_error':
      return { ...state, posts: [], loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
