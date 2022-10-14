import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { useActions } from '../hooks/useActions';

const PostCreate: React.FunctionComponent = () => {
  const { createPost } = useActions();

  const [elementState, setElementState] = useState({
    title: '',
    body: '',
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, body } = elementState;

    let newPost = {
      userId: 'XCMxarCjaY785a8tvZvX-',
      id: nanoid(),
      title,
      body,
    };

    createPost(newPost);
    resetElementState();
  };

  const resetElementState = () => {
    setElementState({
      title: '',
      body: '',
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const renderCreatePostForm = () => {
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
          <button>ADD</button>
        </form>
      </>
    );
  };

  // console.log(elementState, ' elementState >> CreatePost');
  return (
    <>
      <h2>ADD NEW POST</h2>
      {renderCreatePostForm()}
    </>
  );
};

export default PostCreate;
