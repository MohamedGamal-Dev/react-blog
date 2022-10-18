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

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const renderEditPostForm = () => {
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

            <div className="font-serif text-lg font-medium text-mgLight-accent">
              Author: <PostAuthor userId={userId} />
            </div>
            <button className="rounded-lg bg-mgLight-accent px-5 py-2.5 text-center text-lg font-bold text-white shadow-md shadow-mgLight-success hover:bg-mgLight-success hover:shadow-mgLight-accent  focus:outline-none">
                SAVE
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

  return <>{renderEditPostForm()}</>;
};

export default PostCreate;
