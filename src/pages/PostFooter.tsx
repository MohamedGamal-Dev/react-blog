import React from 'react';
import { Link } from 'react-router-dom';
import { POST_BY_ID_PROP } from '../routes';
import { PostFooterProps } from '../services';
import PostReactions from './PostReactions';
import PostRender from './PostRender';

const PostFooter: React.FunctionComponent<PostFooterProps> = ({
  post,
  type = 'single',
  id,
}) => {
  const handlePostRender = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    <PostRender />;
  };

  const renderContentByType = () => {
    switch (type) {
      case 'list':
        return (
          <>
            <div className="flex items-center space-x-1">
              <PostReactions post={post!} />
            </div>
            <button onClick={handlePostRender}>
              <Link
                to={POST_BY_ID_PROP(id)}
                className="font-medium text-mgLight-base-100  hover:text-mgLight-accent"
              >
                Read More...
              </Link>
            </button>
          </>
        );

      case 'single':
        return (
          <>
            <div className="flex items-center space-x-1">
              <PostReactions post={post!} />
            </div>
          </>
        );

      case 'none':
        return null;

      default:
        break;
    }
  };
  return <>{renderContentByType()}</>;
};

export default PostFooter;
