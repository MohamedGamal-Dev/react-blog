import React, { useState } from 'react';
import { InputField } from '../components';
import {
  newsLetterBtnSubmit,
  newsLetterH1,
  newsLetterH2,
  newsLetterInputPlaceholder,
} from './consts';

const MainSidebarNewsLetter: React.FunctionComponent = () => {
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

  return (
    <>
      <div className="flex bg-mgLight-primary p-5 shadow-sm shadow-mgLight-secondary">
        {/* { Container } */}
        <div className="container mx-auto flex flex-col items-center space-y-4 px-6">
          {/* { CTA } */}
          <blockquote className="flex flex-col items-center">
            <div className="text-3xl font-bold italic text-mgLight-base-100">
              {newsLetterH1}
            </div>
            <div className="text-lg italic text-mgLight-base-100  md:text-base 2xl:text-lg">
              {newsLetterH2}
            </div>
          </blockquote>
          {/* { CTA- Form } */}
          <form onSubmit={handleFormSubmit} className="">
            <div className="flex flex-col space-y-2">
              <InputField
                inputFieldType={'email'}
                inputFieldName={'newsLetterEmail'}
                inputFieldValue={newsLetterEmail}
                onInputChange={handleInputChange}
                inputFieldPlaceholder={newsLetterInputPlaceholder}
                inputFieldStyle={'light'}
              />

              <button className="rounded-lg bg-mgLight-secondary px-5 py-2.5 text-center text-lg font-bold text-white shadow-sm shadow-mgLight-base-100 hover:ring-2 hover:ring-mgLight-base-100  focus:outline-none lg:px-12">
                {newsLetterBtnSubmit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainSidebarNewsLetter;
