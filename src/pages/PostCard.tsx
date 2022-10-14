import React from 'react';

const PostCard: React.FunctionComponent = ({ post }) => {
  const { userId, id, title, body } = post;
  // console.log(post, ' POST-PROP >> from >> PostCard');

  const renderPostCard = () => {
    return (
      <>
        <h3>{title}</h3>
        <p>{body.substring(0, 80)}</p>
      </>
    );
  };

  return (
    <>
      {/* */}
      {renderPostCard()}
    </>
  );
};

export default PostCard;
