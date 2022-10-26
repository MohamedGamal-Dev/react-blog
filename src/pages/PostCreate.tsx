import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../hooks/useActions';
import { useAppState } from '../hooks/useAppState';

const PostCreate: React.FunctionComponent = () => {
  const { createPost } = useActions();
  const { users } = useAppState();
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

    let postInputs = {
      userId,
      title,
      body,
    };

    createPost(postInputs);
    setElementState(initialState);
    navigate('/');
  };

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const renderUsersOptionList = () => {
    return users.map((user) => {
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
        {/* { MAIN POST Frame } */}
        <div className="mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-primary px-1 pt-1 shadow shadow-mgLight-secondary ">
          <div className="rounded-lg bg-mgLight-base-100 py-4 px-6">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col space-y-4"
            >
              <input
                name="title"
                value={title}
                onChange={handleOnChange}
                className="block w-full rounded-lg border-2 border-mgLight-secondary bg-mgLight-secondary/20 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-primary focus:ring-mgLight-secondary"
                placeholder="Please Enter Post Title"
                required
              />

              <textarea
                name="body"
                value={body}
                onChange={handleOnChange}
                rows={4}
                className="block w-full rounded-lg border-2 border-mgLight-secondary bg-mgLight-secondary/20 
                p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-primary focus:ring-mgLight-secondary"
                placeholder="Please Enter Post Content"
                required
              ></textarea>

              <select
                name="userId"
                value={userId}
                onChange={handleOnChange}
                id="author"
                className="block w-full rounded-lg border-2 border-mgLight-secondary bg-mgLight-secondary/20 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-primary focus:ring-mgLight-secondary
                "
              >
                <option value="" className="text-mgLight-error">
                  {' '}
                  Please choose author{' '}
                </option>
                {renderUsersOptionList()}
              </select>

              <button className="rounded-lg bg-mgLight-accent px-5 py-2.5 text-center text-lg font-bold text-white shadow-md shadow-mgLight-success hover:bg-mgLight-success hover:shadow-mgLight-accent  focus:outline-none">
                ADD NEW POST
              </button>
            </form>
          </div>

          {/* { *** CARD-FOOTER *** } */}
          <div className="flex items-center justify-between rounded-bl-lg rounded-br-lg bg-mgLight-primary py-3 px-6">
            <div className="flex items-center space-x-1">
              {' '}
              {/* { reaction-feature-placeholder } */}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* <h2>ADD NEW POST</h2> */}
      {renderCreatePostForm()}
    </>
  );
};

export default PostCreate;
