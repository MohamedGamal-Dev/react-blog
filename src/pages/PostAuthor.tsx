import React from 'react';
import { useSelector } from '../hooks/useTypedStore';
import { UserProps } from '../services';

const PostAuthor: React.FunctionComponent<UserProps> = ({ userId }) => {
  const { users } = useSelector((state) => state.users);

  const renderUser = () => {
    const postAuthor = users.find((user) => {
      return user.id === userId;
    });

    return <span>{postAuthor ? postAuthor.name : 'Anonymous Author'}</span>;
  };

  return <>{renderUser()}</>;
};

export default PostAuthor;
