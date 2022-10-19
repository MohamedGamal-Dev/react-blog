import React from 'react';
import { InputFieldUiProps } from './InputField.types';

export const InputField: React.FunctionComponent<InputFieldUiProps> = ({
  inputFieldOptions,
}) => {
  const {
    type,
    InputValue,
    InputName,
    onInputChange,
    classNames,
    defaultStyle = true,
    required = false,
    id,
    placeholder,
  } = inputFieldOptions;

  let inputTextDefaultStyles = `w-full rounded-lg border-2 border-mgLight-secondary bg-gray-50 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-base-100 focus:ring-mgLight-secondary`;

  const defaultStyles = defaultStyle ? inputTextDefaultStyles : null;

  return (
    <>
      <input
        type={type}
        name={InputName}
        value={InputValue}
        onChange={onInputChange}
        id={id}
        className={` ${defaultStyles} ${' '} ${classNames} `}
        placeholder={placeholder}
        required={required ? true : false}
      />
    </>
  );
};
