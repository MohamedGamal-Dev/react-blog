import React from 'react';
import { Card, InputField, Textarea } from '../components';
import { SelectField } from '../components/ui/select-field';

import { useActions } from '../hooks/useActions';
import { useAppState } from '../hooks/useAppState';
import { useFormState } from '../hooks/useFormState';
import { HOME_PAGE } from '../routes';

import PostFooter from './PostFooter';

const PostCreate: React.FunctionComponent = () => {
  const { createPost } = useActions();
  const { users } = useAppState();

  const initialState = {
    userId: '',
    title: '',
    body: '',
  };

  const { elementState, handleFormSubmit, handleOnChange, reset, navigate } =
    useFormState(initialState, onFormSubmit);
  const { userId, title, body } = elementState!;
 
  function onFormSubmit() {
    let postInputs = {
      userId,
      title,
      body,
    };

    createPost(postInputs);
    reset();
    navigate(HOME_PAGE);
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

          <SelectField
            selectFieldName="userId"
            selectFieldValue={userId}
            onChange={handleOnChange}
            selectFieldCssId="author"
            selectFieldStyle={'secondary'}
            selectOptionsList={users}
            selectFieldPlaceholder={'Please choose author'}
          />

          <button className="rounded-lg bg-mgLight-accent px-5 py-2.5 text-center text-lg font-bold text-white shadow-md shadow-mgLight-success hover:bg-mgLight-success hover:shadow-mgLight-accent  focus:outline-none">
            ADD NEW POST
          </button>
        </form>
      </Card>
    </>
  );
};

export default PostCreate;