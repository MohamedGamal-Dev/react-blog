import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppState } from '../hooks/useAppState';
import { useActions } from '../hooks/useActions';
import { useFormState } from '../hooks/useFormState';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import { POST_BY_ID_PROP } from '../routes';
import { PostType } from '../services';
import { Card, InputField, Textarea } from '../components';
import PostFooter from './PostFooter';

const PostEdit: React.FunctionComponent = () => {
  const { editPost } = useActions();
  const { postId } = useParams();

  const { getPostById } = useAppState();
  const post = getPostById(postId!);

  const initialState = {
    userId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body,
    date: post.date,
  };

  const { elementState, handleFormSubmit, handleOnChange, reset, navigate } =
    useFormState(initialState, onFormSubmit);
  const { userId, id, title, body, date } = elementState!;

  function onFormSubmit() {
    const editedPost: PostType = { userId, id, title, body, date };

    editPost(editedPost);
    navigate(POST_BY_ID_PROP(id));
  }

  return (
    <>
      <Card
        frameFooterRenderComponent={<PostFooter type={'none'} />}
        headerStatus={false}
        subHeaderStatus={false}
      >
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
          <InputField
            inputFieldType={'text'}
            inputFieldName={'title'}
            inputFieldValue={title}
            onInputChange={handleOnChange}
            inputFieldStyle={'secondary'}
            inputFieldPlaceholder={'Please Enter Post Title'}
            inputFieldRequired={true}
          />

          <Textarea
            textareaName={'body'}
            textareaValue={body}
            onChange={handleOnChange}
            textareaStyle={'secondary'}
            textareaPlaceholder={'Please Enter Post Content'}
            textareaRequired={true}
            textareaRows={4}
          />

          <div className={`flex flex-row items-start space-x-2`}>
            <div
              className={`font-serif text-sm font-medium text-mgLight-accent`}
            >
              Author : <PostAuthor userId={userId} />
            </div>
            <div className={`text-sm font-light text-mgLight-neutral`}>
              Created : <PostDate timestamp={date!} />
            </div>
          </div>

          <button className="rounded-lg bg-mgLight-accent px-5 py-2.5 text-center text-lg font-bold text-white shadow-md shadow-mgLight-success hover:bg-mgLight-success hover:shadow-mgLight-accent focus:outline-none">
            SAVE
          </button>
        </form>
      </Card>
    </>
  );
};

export default PostEdit;
