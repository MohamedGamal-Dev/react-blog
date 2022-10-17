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
        <div
          className="mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-base-100/40 px-8
           py-4 shadow shadow-mgLight-secondary "
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-mgLight-neutral hover:text-mgLight-accent hover:underline">
              {title}
            </h2>

            <div className="flex items-center space-x-1">
              <Link
                to={`/post/${id}/edit`}
                className="transform cursor-pointer rounded bg-mgLight-accent px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-success"
              >
                Edit
              </Link>

              <button
                onClick={handleDeleteClick}
                className="transform cursor-pointer rounded bg-mgLight-error px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-error/75"
              >
                Delete
              </button>
            </div>
          </div>

          {/* { *** Author && DATE *** } */}
          <div className="flex items-start space-x-2">
            <div className="font-serif text-sm font-medium text-mgLight-accent">
              <PostAuthor userId={userId} />
            </div>
            <div className="text-sm font-light text-mgLight-neutral ">
              {/* { date-feature-placeholder } */}
              Feb 02, 2022
            </div>
          </div>

          {/* { *** SUMMARY BODY *** } */}
          <div className="mt-0">
            <p className="mt-2 text-lg text-mgLight-neutral/90 ">{body}</p>
          </div>
        </div>
      </>
    );
  };

  return <>{renderFullPost()}</>;
};

export default PostRender;
