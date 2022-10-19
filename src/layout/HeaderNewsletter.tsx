import React, { useState } from 'react';
import { InputField } from '../components';

const HeaderNewsletter: React.FunctionComponent = () => {
  const initialState = {
    newsLetterEmail: '',
  };

  const [elementState, setElementState] = useState(initialState);
  const { newsLetterEmail } = elementState;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setElementState((prevElementState) => ({
      ...prevElementState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newsLetterEmail, '=== >> News Letter Email SUBMITTED << ===');
    setElementState(initialState);
  };

  let inputTextOptions = {
    type: 'email',
    InputValue: `${newsLetterEmail}`,
    InputName: 'newsLetterEmail',
    onInputChange: handleInputChange,
    classNames: ``,
    required: true,
    placeholder: 'Your Email address',
  };

  return (
    <>
      <div className="flex bg-mgLight-primary p-5 shadow-sm shadow-mgLight-secondary">
        {/* { Container } */}
        <div className="container mx-auto flex flex-col items-center px-6 md:flex-row md:space-y-0 md:space-x-2 sm-only:space-y-4">
          {/* { CTA } */}
          <blockquote className="flex flex-col items-center md:w-1/2">
            <div className="text-3xl font-bold italic text-mgLight-base-100 md:text-4xl">
              "STAY TUNED"
            </div>
            <div className="text-lg italic text-mgLight-base-100 md:text-xl md:font-semibold lg:text-2xl ">
              "Don't miss out on any action !!!"
            </div>
          </blockquote>
          {/* { CTA- Form } */}
          <form onSubmit={handleFormSubmit} className="md:w-1/2">
            <div className="flex flex-col md:flex-row md:space-x-2 sm-only:space-y-2">
              <InputField inputFieldOptions={inputTextOptions} />

              <button className="rounded-lg bg-mgLight-secondary px-5 py-2.5 text-center text-lg font-bold text-white shadow-sm shadow-mgLight-base-100 hover:ring-2 hover:ring-mgLight-base-100  focus:outline-none lg:px-12">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeaderNewsletter;
