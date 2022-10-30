import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { HOME_PAGE, POST_BY_ID_EDIT_PROP } from '../routes';
import { useAppState } from '../hooks/useAppState';
import { useActions } from '../hooks/useActions';
import { Card } from '../components/ui/';

import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostFooter from './PostFooter';

const PostRender: React.FunctionComponent = () => {
  const { deletePost } = useActions();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { getPostById } = useAppState();

  const post = getPostById(postId!);
  const { userId, id, title, body, date } = post;

  const handleDeleteClick = () => {
    deletePost(id);
    navigate(HOME_PAGE);
  };

  return (
    <>
      <Card
        frameFooterRenderComponent={<PostFooter type={'single'} post={post} />}
        authorRender={<PostAuthor userId={userId} />}
        dateRender={<PostDate timestamp={date!} />}
        onDeleteClick={handleDeleteClick}
        headingText={title}
        targetId={id}
      >
        {body}
      </Card>
    </>
  );
};

export default PostRender;
