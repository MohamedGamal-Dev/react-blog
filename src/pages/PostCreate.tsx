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

  const { userId, title, body } = elementState;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
        <div
          className="mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-base-100/40 px-8
           py-4 shadow shadow-mgLight-secondary "
        >
          <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
            <input
              name="title"
              value={title}
              onChange={handleInputChange}
              className="block w-full rounded-lg border-2 border-mgLight-secondary bg-mgLight-secondary/20 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-primary focus:ring-mgLight-secondary"
              placeholder="Please Enter Post Title"
              required
            />
            <input
              name="body"
              value={body}
              onChange={handleInputChange}
              className="block w-full rounded-lg border-2 border-mgLight-secondary bg-mgLight-secondary/20 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-primary focus:ring-mgLight-secondary"
              placeholder="Please Enter Post Content"
              required
            />

            <select
              name="userId"
              value={userId}
              onChange={handleSelectChange}
            >
              <option value=""> --Please choose author-- </option>
              {renderUsersOptionList()}
            </select>

            <button className="rounded-lg bg-mgLight-accent px-5 py-2.5 text-center text-lg font-bold text-white shadow-md shadow-mgLight-success hover:bg-mgLight-success hover:shadow-mgLight-accent  focus:outline-none">
              ADD
            </button>
          </form>
        </div>
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
