import React from 'react';
import { Link } from 'react-router-dom';

import { useActions } from '../hooks/useActions';
import { PostProps } from '../services';

const PostCard: React.FunctionComponent<PostProps> = ({ post }) => {
  const { deletePost } = useActions();

  const { userId, id, title, body } = post;
  // console.log(post, ' POST-PROP >> from >> PostCard');

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deletePost(id);
  };

  const renderPostCard = () => {
    return (
      <>
        <h3>{title}</h3>
        <p>{body.substring(0, 80)}</p>
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

  return (
    <>
      {/* */}
      {renderPostCard()}
    </>
  );
};

export default PostCard;
