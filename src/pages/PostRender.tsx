import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useAppState } from '../hooks/useAppState';
import { useActions } from '../hooks/useActions';
import PostAuthor from './PostAuthor';

const PostRender: React.FunctionComponent = () => {
  const { deletePost } = useActions();
  const navigate = useNavigate();
  let { postId } = useParams();

  const { getPostById } = useAppState();
  const post = getPostById(postId!);
  const { userId, id, title, body } = post;

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deletePost(id);
    navigate('/');
  };

  const renderFullPost = () => {
    return (
      <>
        <h3>{title}</h3>
        <p>{body}</p>
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
      </>
    );
  };

  return <>{renderFullPost()}</>;
};

export default PostRender;
