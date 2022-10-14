export interface PostsState {
  posts: PostType[];
  loading: boolean;
  error: null | string;
}

export type PostType = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export interface PostProps {
  post: PostType;
  children?: React.ReactNode;
}
