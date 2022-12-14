export interface PostsState {
  posts: PostType[];
  loading: boolean;
  error: null | string;
}

export interface PostType {
  userId: string;
  id: string;
  title: string;
  body: string;
  date: string;
  reactions?: {
    [reaction: string]: number;
  };
}

export interface CreatePostType {
  userId: string;
  title: string;
  body: string;
}

// export type SortPostsType = <PostType>(post: PostType[]) => PostType[];

export interface PostProps {
  post: PostType;
  children?: React.ReactNode;
}

export interface PostDateProps {
  timestamp: string;
  children?: React.ReactNode;
}
export interface PostFooterProps {
  post?: PostType;
  type?: string;
  id?: string;
}
