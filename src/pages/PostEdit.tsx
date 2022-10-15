import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from '../hooks/useTypedStore';
import { useActions } from '../hooks/useActions';
import { PostType } from '../services';
import PostAuthor from './PostAuthor';

const PostCreate: React.FunctionComponent = () => {
  const { editPost } = useActions();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.posts);

  const post = posts.find((post) => {
    return post.id === postId;
  });

  if (!post) {
    return <>{'Sorry!!!, Post Not Found'}</>;
  }

  const [elementState, setElementState] = useState<PostType>({
    userId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body,
  });

  const { userId, id, title, body } = elementState;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let editedPost = { userId, id, title, body };

    editPost(editedPost);
    navigate('/');
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
