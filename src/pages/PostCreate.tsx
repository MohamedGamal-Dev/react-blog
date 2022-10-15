import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../hooks/useActions';
import { useAppState } from '../hooks/useAppState';

const PostCreate: React.FunctionComponent = () => {
  const { createPost } = useActions();
  const { usersState } = useAppState();
  const navigate = useNavigate();

  const initialState = {
    userId: '',
    title: '',
    body: '',
  };

  const [elementState, setElementState] = useState(initialState);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { userId, title, body } = elementState;

    let newPost = {
      userId,
      id: nanoid(),
      title,
      body,
    };

    createPost(newPost);
    setElementState(initialState);
    navigate('/');
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const renderUsersOptionList = () => {
    return usersState.map((user) => {
      return (
        <React.Fragment key={user.id}>
          <option value={user.id}>{user.name}</option>
        </React.Fragment>
      );
    });
  };

  const renderCreatePostForm = () => {
    return (
      <>
        <form
          onSubmit={handleFormSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input
            name="title"
            value={elementState.title}
            onChange={handleInputChange}
          />
          <input
            name="body"
            value={elementState.body}
            onChange={handleInputChange}
          />

          <select
            name="userId"
            value={elementState.userId}
            onChange={handleSelectChange}
          >
            <option value=""> --Please choose author-- </option>
            {renderUsersOptionList()}
          </select>

          <button>ADD</button>
        </form>
      </>
    );
  };

  return (
    <>
      <h2>ADD NEW POST</h2>
      {renderCreatePostForm()}
    </>
  );
};

export default PostCreate;
