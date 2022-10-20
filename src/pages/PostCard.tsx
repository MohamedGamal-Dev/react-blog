import React from 'react';
import { Link } from 'react-router-dom';

import { useActions } from '../hooks/useActions';
import { PostProps } from '../services';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostRender from './PostRender';

const PostCard: React.FunctionComponent<PostProps> = ({ post }) => {
  const { deletePost } = useActions();
  const { userId, id, title, body, date } = post;

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deletePost(id);
  };
  const handlePostRender = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    <PostRender />;
  };

  const renderPostCard = () => {
    return (
      <>
        {/* { MAIN POST-CARD Frame } */}
        <div className="mx-auto rounded-lg  border border-mgLight-secondary/20 bg-mgLight-primary px-1 pt-1 shadow shadow-mgLight-secondary ">
          <div className="rounded-lg bg-mgLight-base-100 py-4 px-6">
            {/* { *** TITLE && POST OPTIONS *** } */}
            <div className="flex items-center justify-between">
              <Link
                to={`/post/${id}`}
                className="text-2xl font-bold text-mgLight-neutral hover:text-mgLight-accent hover:underline"
              >
                {title}
              </Link>

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
            <div className="flex items-start space-x-2 border-b-2 border-mgLight-secondary pb-1">
              <div className="font-serif text-sm font-medium text-mgLight-accent">
                <PostAuthor userId={userId} />
              </div>
              <div className="text-sm font-light text-mgLight-neutral ">
                {/* { *** DATE *** } */}
                <PostDate timestamp={date!} />
              </div>
            </div>

            {/* { *** SUMMARY BODY *** } */}
            <div className="mt-0">
              <p className="mt-2 text-mgLight-neutral/90 ">
                {body.substring(0, 500)}
              </p>
            </div>
          </div>

          {/* { *** CARD-FOOTER *** } */}
          <div className="flex items-center justify-between rounded-bl-lg rounded-br-lg bg-mgLight-primary py-3 px-6">
            <div className="flex items-center space-x-1">
              {' '}
              {/* { reaction-feature-placeholder } */}
            </div>
            <button onClick={handlePostRender}>
              <Link
                to={`/post/${id}`}
                className="font-medium text-mgLight-base-100  hover:text-mgLight-accent"
              >
                Read More ⟶
              </Link>
            </button>
          </div>
        </div>

        {/* { Categories/tags-possible-feature } */}
        {/* <div className="mt-4 flex items-center justify-start space-x-1 ">
            <Link
              to={'/'}
              className="transform cursor-pointer rounded bg-mgLight-primary px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-success"
            >
              Categories
            </Link>
            <Link
              to={'/'}
              className="transform cursor-pointer rounded bg-mgLight-primary px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-mgLight-success"
            >
              Tags
            </Link>
          </div> */}
      </>
    );
  };

  return <>{renderPostCard()}</>;
};

export default PostCard;
