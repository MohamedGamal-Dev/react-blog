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
  date?: string;
};

export type CreatePostType = {
  userId: string;
  title: string;
  body: string;
};

// export type SortPostsType = <PostType>(post: PostType[]) => PostType[];

export interface PostProps {
  post: PostType;
  children?: React.ReactNode;
}

export interface PostDateProps {
  timestamp: string;
  children?: React.ReactNode;
}
