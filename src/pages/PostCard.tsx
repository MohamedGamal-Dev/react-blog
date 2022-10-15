import React from 'react';
import { Link } from 'react-router-dom';

import { useActions } from '../hooks/useActions';
import { PostProps } from '../services';
import PostAuthor from './PostAuthor';
import PostRender from './PostRender';

const PostCard: React.FunctionComponent<PostProps> = ({ post }) => {
  const { deletePost } = useActions();
  const { userId, id, title, body } = post;

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deletePost(id);
  };
  const handlePostRender = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    <PostRender />;
  };

  const renderPostCard = () => {
    return (
      <>
        <h3>{title}</h3>
        <p>{body.substring(0, 80)}</p>
        <div>
          Author: <PostAuthor userId={userId} />
        </div>
        <button>
          <Link
            to={`/post/${id}/edit`}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            Edit
          </Link>
        </button>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handlePostRender}>
          <Link
            to={`/post/${id}`}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            Read More
          </Link>
        </button>
      </>
    );
  };

  return <>{renderPostCard()}</>;
};

export default PostCard;
