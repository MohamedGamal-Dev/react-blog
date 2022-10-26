import React from 'react';
import { InputFieldUiProps } from './InputField.types';

export const InputField: React.FunctionComponent<InputFieldUiProps> = ({
  inputFieldType = 'text',
  inputFieldName,
  inputFieldValue,
  onInputChange,
  inputFieldClass,
  inputFieldStyle = 'minimal',
  inputFieldRequired = false,
  inputFieldCssId,
  inputFieldPlaceholder,
}) => {
  const inputFieldStyles = () => {
    switch (inputFieldStyle) {
      case 'secondary':
        return `block w-full rounded-lg border-2 border-mgLight-secondary bg-mgLight-secondary/20 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-primary focus:ring-mgLight-secondary`;

      case 'light':
        return `w-full rounded-lg border-2 border-mgLight-secondary bg-gray-50 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-base-100 focus:ring-mgLight-secondary`;

      case 'minimal':
        return `w-full border-2 p-2.5 text-lg outline-none`;

      case 'none':
        return null;

      default:
        break;
    }
  };

  return (
    <>
      <input
        type={inputFieldType}
        name={inputFieldName}
        value={inputFieldValue}
        onChange={onInputChange}
        id={inputFieldCssId}
        className={` ${inputFieldStyles()} ${' '} ${inputFieldClass} `}
        placeholder={inputFieldPlaceholder}
        required={inputFieldRequired}
      />
    </>
  );
};
