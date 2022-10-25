import React from 'react';
import { useAppState } from '../hooks/useAppState';
import { UserProps } from '../services';

const PostAuthor: React.FunctionComponent<UserProps> = ({ userId }) => {
  const { getUserById } = useAppState();

  const postAuthor = getUserById(userId!);

  return <span>{postAuthor ? postAuthor.name : 'Anonymous Author'}</span>;
};

export default PostAuthor;
