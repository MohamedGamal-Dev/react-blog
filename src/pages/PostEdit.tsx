import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppState } from '../hooks/useAppState';
import { useActions } from '../hooks/useActions';
import { PostType } from '../services';
import PostAuthor from './PostAuthor';

const PostCreate: React.FunctionComponent = () => {
  const { editPost } = useActions();
  const navigate = useNavigate();
  const { postId } = useParams();

  const { getPostById } = useAppState();
  const post = getPostById(postId!);

  const [elementState, setElementState] = useState({
    userId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body,
  });

  const { userId, id, title, body } = elementState;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const editedPost: PostType = { userId, id, title, body };

    editPost(editedPost);
    navigate(`/post/${id}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const renderEditPostForm = () => {
    return (
      <>
        <form
          onSubmit={handleFormSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input name="title" value={title} onChange={handleChange} />
          <input name="body" value={body} onChange={handleChange} />
          <div>
            Author: <PostAuthor userId={userId} />
          </div>
          <button>Save</button>
        </form>
      </>
    );
  };

  return <>{renderEditPostForm()}</>;
};

export default PostCreate;
