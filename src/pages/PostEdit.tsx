import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from '../hooks/useTypedStore';
import { useActions } from '../hooks/useActions';
// import { PostProps } from '../services';

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

  const { title, body } = post;

  const [elementState, setElementState] = useState({
    title,
    body,
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, body } = elementState;
    let editedPost = { ...post, title, body };

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
        <form onSubmit={handleFormSubmit}>
          <input
            name="title"
            value={elementState.title}
            onChange={handleChange}
          />
          <input
            name="body"
            value={elementState.body}
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      </>
    );
  };

  return <>{renderEditPostForm()}</>;
};

export default PostCreate;
