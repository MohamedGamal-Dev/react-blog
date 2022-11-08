import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useActions } from '../hooks/useActions';
import { PostProps } from '../services';

// import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const PostReactions: React.FunctionComponent<PostProps> = ({ post }) => {
  const { reactions, id } = post!;
  const { reactionCount } = useActions();

  // const handleClick = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {};

  let iconStyle =
    'text-md items-center py-0 pr-0 text-center text-mgLight-accent text-inherit focus:outline-none';
  let reactionsIcons = {
    thumbsUp: <FaThumbsUp className={iconStyle} />,
    thumbsDown: <FaThumbsDown className={iconStyle} />,
  };

  const renderReactions = Object.entries(reactionsIcons).map(
    ([reaction, icon]) => {
      return (
        <button
          type="button"
          key={reaction}
          className="flex flex-row items-center space-x-2 overflow-hidden rounded-lg bg-mgLight-base-100 py-1 pl-2 pr-1 text-mgLight-accent shadow-sm shadow-mgLight-warning hover:text-mgLight-success focus:outline-none"
          onClick={() => {
            return reactionCount(id, reaction);
          }}
        >
          {icon}

          <div className="rounded-lg bg-mgLight-secondary px-3.5 py-0 font-medium text-mgLight-base-100 ">
            {reactions![reaction]}
          </div>
        </button>
      );
    }
  );

  return <div className=" flex flex-row space-x-2 ">{renderReactions}</div>;
};

export default PostReactions;
