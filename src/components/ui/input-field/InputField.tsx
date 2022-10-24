import React from 'react';
import { InputFieldUiProps } from './InputField.types';

export const InputField: React.FunctionComponent<InputFieldUiProps> = ({
  inputFieldType,
  inputFieldName,
  inputFieldValue,
  onInputChange,
  inputFieldClass,
  inputFieldStyle = true,
  inputFieldRequired = false,
  inputFieldCssId,
  inputFieldPlaceholder,
}) => {
  const inputFieldStyles = {
    default: `w-full rounded-lg border-2 border-mgLight-secondary bg-gray-50 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-base-100 focus:ring-mgLight-secondary`,
  };

  return (
    <>
      <input
        type={inputFieldType}
        name={inputFieldName}
        value={inputFieldValue}
        onChange={onInputChange}
        id={inputFieldCssId}
        className={` ${
          inputFieldStyle && inputFieldStyles.default
        } ${' '} ${inputFieldClass} `}
        placeholder={inputFieldPlaceholder}
        required={inputFieldRequired}
      />
    </>
  );
};
