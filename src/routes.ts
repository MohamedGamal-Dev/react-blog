export const setPostDynamicId = (id: string = ':postId') => {
  return id;
};

export const POST_BY_ID_PROP = (id: string = ':postId') => {
  return `/post/${id}`;
};
export const POST_BY_ID_EDIT_PROP = (id: string = ':postId') => {
  return `/post/${id}/edit`;
};

export const CATCH_ALL = '*';
export const HOME_PAGE = '/';
export const POST = '/post';
export const POST_ADD = '/post';
export const POST_BY_ID = `/post/:postId`;
export const POST_BY_ID_EDIT = `/post/:postId/edit`;

export const navPages = [
  {
    title: 'home',
    to: '/',
  },
  {
    title: 'New Post',
    to: '/post',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Error',
    to: '/404',
  },
];
