import React from 'react';
import { Card } from '../components';
import { PostProps } from '../services';
import { useActions } from '../hooks/useActions';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostFooter from './PostFooter';

const PostCard: React.FunctionComponent<PostProps> = ({ post }) => {
  const { deletePost } = useActions();
  const { userId, id, title, body, date } = post;

  const handleDeleteClick = () => {
    deletePost(id);
  };

  return (
    <>
      <Card
        frameFooterRenderComponent={<PostFooter id={id} type={'list'} />}
        authorRender={<PostAuthor userId={userId} />}
        dateRender={<PostDate timestamp={date!} />}
        onDeleteClick={handleDeleteClick}
        headingText={title}
        headingLink={true}
        targetId={id}
      >
        {body.substring(0, 500)}
        {`...`}
      </Card>
    </>
  );
};

export default PostCard;
